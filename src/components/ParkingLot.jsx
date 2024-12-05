import React from "react";
import { Grid2 as Grid, Paper, Typography } from "@mui/material";

const ParkingLot = ({ parkingLot }) => {
    const positions = parkingLot.tickets.map((ticket) => ticket.position);

    return (
        <Paper style={{ padding: "16px" }}>
            <Typography variant="h6" sx={{ paddingY: "10px" }}>
                {parkingLot.name}
            </Typography>
            <Grid container spacing={2}>
                {Array.from({ length: parkingLot.capacity }).map((_, i) => {
                    const position = i + 1;
                    if (positions.includes(position)) {
                        const ticket = parkingLot.tickets.find(
                            (ticket) => ticket.position === position
                        );
                        return (
                            <Grid
                                size={4}
                                key={position}
                                sx={{
                                    textAlign: "center",
                                    overflow: "clip",
                                }}
                            >
                                {ticket.car.plateNumber}
                            </Grid>
                        );
                    }
                    return (
                        <Grid key={position} size={4}>
                            {position}
                        </Grid>
                    );
                })}
            </Grid>
        </Paper>
    );
};

export default ParkingLot;
