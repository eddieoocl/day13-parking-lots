import {
    Button,
    FormControl,
    Grid2 as Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { ParkingLotContext } from "../context/ParkingLotContext";

const FetchAndParkComponent = () => {
    const { state } = useContext(ParkingLotContext);
    const [dropdownValue, setDropdownValue] = useState("");

    const handleDropdownChange = (event) => {
        setDropdownValue(event.target.value);
    };

    return (
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
                            v
                            ariant="outlined"
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
                        value={dropdownValue}
                        onChange={handleDropdownChange}
                        label="Options"
                    >
                        {state.map((parkingLot, i) => (
                            <MenuItem key={i} value={parkingLot.name}>
                                {parkingLot.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid size={1}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "0 10px", width: "100%" }}
                >
                    Fetch
                </Button>
            </Grid>
            <Grid size={1}>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ margin: "0 10px", width: "100%" }}
                >
                    Park
                </Button>
            </Grid>
        </Grid>
    );
};

export default FetchAndParkComponent;
