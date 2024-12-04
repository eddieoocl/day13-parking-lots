import React from "react";
import { Grid2 as Grid, Paper, Typography } from "@mui/material";

const ParkingLot = ({ parkingLot }) => {
    return (
        <Paper style={{ padding: "16px" }}>
            <Grid container spacing={2}>
                {Array.from({ length: parkingLot.capacity }).map((_, i) => (
                    <Grid size={4} key={i}>
                        <Typography>{i}</Typography>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" sx={{ paddingY: "10px" }}>
                {parkingLot.name}
            </Typography>
        </Paper>
    );
};

export default ParkingLot;
