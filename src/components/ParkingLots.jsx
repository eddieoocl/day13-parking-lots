import { Grid2 as Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { ParkingLotContext } from "../context/ParkingLotContext";
import ParkingLot from "./ParkingLot";
import { getParkingLots } from "../api/parkingLot";
import { ParkingLotActionTypes } from "../enums/ParkingLotActionTypes";
import { ParkingBoyContext } from "../context/ParkingBoyContext";

const ParkingLots = () => {
    const { state: parkingLotState, dispatch: parkingLotDispatch } =
        useContext(ParkingLotContext);
    const { state: parkingBoyState } = useContext(ParkingBoyContext);

    const init = async () => {
        const parkingLots = await getParkingLots();
        parkingLotDispatch({
            type: ParkingLotActionTypes.Set,
            payload: parkingLots ?? [],
        });
    };

    useEffect(() => {
        init();
    }, [parkingBoyState.latestTicket]);

    const parkingLots = parkingLotState.map((parkingLot) => {
        return (
            <Grid size={4}>
                <ParkingLot key={parkingLot.id} parkingLot={parkingLot} />
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
