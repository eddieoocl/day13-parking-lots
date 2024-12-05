import { Grid2 as Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { ParkingLotContext } from "../context/ParkingLotContext";
import ParkingLot from "./ParkingLot";
import { getParkingLots } from "../api/parkingLot";
import { ParkingLotActionTypes } from "../enums/ParkingLotActionTypes";

const ParkingLots = () => {
    const { state, dispatch } = useContext(ParkingLotContext);

    const init = async () => {
        const parkingLots = await getParkingLots();
        dispatch({
            type: ParkingLotActionTypes.Set,
            payload: parkingLots ?? [],
        });
    };

    useEffect(() => {
        init();
    }, []);

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
