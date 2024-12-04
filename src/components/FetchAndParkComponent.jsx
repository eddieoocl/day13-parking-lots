import {
    Button,
    FormControl,
    Grid2 as Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { ParkingLotContext } from "../App";

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
            <Grid item size={6}>
                <TextField
                    label="Input Text"
                    v
                    ariant="outlined"
                    sx={{ width: "100%" }}
                />
            </Grid>
            <Grid item size={2}>
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
            <Grid item size={1}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "0 10px", width: "100%" }}
                >
                    Fetch
                </Button>
            </Grid>
            <Grid item size={1}>
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
