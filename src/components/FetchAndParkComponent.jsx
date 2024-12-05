import {
    Box,
    Button,
    FormControl,
    Grid2 as Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { fetch, getParkingBoys, park } from "../api/parkingBoy";
import { ParkingBoyContext } from "../context/ParkingBoyContext";
import { ParkingBoyActionTypes } from "../enums/ParkingBoyActionTypes";

const FetchAndParkComponent = () => {
    const {
        state: { parkingBoys },
        dispatch,
    } = useContext(ParkingBoyContext);
    const [plateNumber, setPlateNumber] = useState("");
    const [strategy, setStrategy] = useState("");
    const [plateNumberError, setPlateNumberError] = useState(false);

    const init = async () => {
        const parkingBoys = await getParkingBoys();
        setStrategy(parkingBoys[0]);
        dispatch({
            type: ParkingBoyActionTypes.SetParkingBoy,
            payload: parkingBoys ?? [],
        });
    };

    useEffect(() => {
        init();
    }, []);

    const handleDropdownChange = (event) => {
        setStrategy(event.target.value);
    };

    const handlePark = async (event) => {
        event.preventDefault();
        if (plateNumberError) {
            return;
        }
        const ticket = await park({ strategy, plateNumber });
        dispatch({
            type: ParkingBoyActionTypes.SetLatestTicket,
            payload: ticket,
        });
    };

    const handleFetch = async (event) => {
        event.preventDefault();
        if (plateNumberError) {
            return;
        }
        const car = await fetch({ plateNumber });
    };

    const checkPlateNumberFormat = (event) => {
        event.preventDefault();
        const plateNumberRegex = /^[A-Z]{2}-\d{4}$/;
        setPlateNumberError(!plateNumberRegex.test(event.target.value));
    };

    return (
        <Box component="form">
            <Grid
                container
                spacing={1}
                sx={{
                    marginY: "20px",
                    paddingY: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                <Grid
                    size={6}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Grid
                        container
                        spacing={0}
                        sx={{
                            alignItems: "center",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            width: "100%",
                        }}
                    >
                        <Grid
                            size={2}
                            sx={{
                                paddingRight: "10px",
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Typography>Plate Number</Typography>
                        </Grid>
                        <Grid
                            size={10}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <TextField
                                label="Plate Number"
                                variant="outlined"
                                value={plateNumber}
                                onChange={(e) => setPlateNumber(e.target.value)}
                                onBlur={checkPlateNumberFormat}
                                sx={{ width: "100%" }}
                                error={plateNumberError}
                                helperText={
                                    plateNumberError
                                        ? "Plate number should follow the following format: AB-1234"
                                        : ""
                                }
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={2}>
                    <FormControl variant="outlined" sx={{ width: "100%" }}>
                        <InputLabel id="dropdown-label">Options</InputLabel>
                        <Select
                            labelId="dropdown-label"
                            value={strategy}
                            onChange={handleDropdownChange}
                            label="Strategy"
                        >
                            {parkingBoys?.map((parkingBoy, i) => (
                                <MenuItem key={parkingBoy} value={parkingBoy}>
                                    {parkingBoy}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={1}>
                    <Button
                        type="button"
                        variant="contained"
                        color="secondary"
                        style={{ margin: "0 10px", width: "100%" }}
                        onClick={handlePark}
                    >
                        Park
                    </Button>
                </Grid>
                <Grid size={1}>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        style={{ margin: "0 10px", width: "100%" }}
                        onClick={handleFetch}
                    >
                        Fetch
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FetchAndParkComponent;
