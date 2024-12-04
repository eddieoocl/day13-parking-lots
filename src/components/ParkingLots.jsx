import { Grid2 as Grid } from "@mui/material";
import { useContext } from "react";
import { ParkingLotContext } from "../context/ParkingLotContext";
import ParkingLot from "./ParkingLot";

const ParkingLots = () => {
    const { state, dispatch } = useContext(ParkingLotContext);

    const parkingLots = state.map((parkingLot) => {
        return (
            <Grid size={4}>
                <ParkingLot parkingLot={parkingLot} />
            </Grid>
        );
    });

    return (
        <Grid container spacing={2} sx={{ padding: "10px" }}>
            {parkingLots}
        </Grid>
    );
};

export default ParkingLots;
