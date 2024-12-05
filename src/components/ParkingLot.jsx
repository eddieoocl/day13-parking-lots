import React from "react";
import { Grid2 as Grid, Paper, Typography } from "@mui/material";

const ParkingLot = ({ parkingLot }) => {
    const positions = parkingLot.tickets.map((ticket) => ticket.position);

    return (
        <Paper style={{ padding: "16px" }}>
            <Grid container spacing={2}>
                {Array.from({ length: parkingLot.capacity }).map((_, i) => {
                    if (positions.includes(i)) {
                        const ticket = parkingLot.tickets.find(
                            (ticket) => ticket.position === i
                        );
                        return (
                            <Grid
                                size={4}
                                sx={{ textAlign: "center", overflow: "clip" }}
                            >
                                {ticket.car.plateNumber}
                            </Grid>
                        );
                    }
                    return <Grid size={4}>{i}</Grid>;
                })}
            </Grid>
            <Typography variant="h6" sx={{ paddingY: "10px" }}>
                {parkingLot.name}
            </Typography>
        </Paper>
    );
};

export default ParkingLot;
