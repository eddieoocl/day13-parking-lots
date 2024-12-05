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
    const { state, dispatch } = useContext(ParkingBoyContext);
    const [plateNumber, setPlateNumber] = useState("");
    const [strategy, setStrategy] = useState("");

    const init = async () => {
        const parkingBoys = await getParkingBoys();
        dispatch({
            type: ParkingBoyActionTypes.Set,
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
        const ticket = await park({ strategy, plateNumber });
    };

    const handleFetch = async (event) => {
        event.preventDefault();
        const car = await fetch({ plateNumber });
    };

    return (
        <Box component="form">
            <Grid
                container
                spacing={1}
                sx={{
                    marginTop: "20px",
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
                                sx={{ width: "100%" }}
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
                            {state.map((parkingBoy, i) => (
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
