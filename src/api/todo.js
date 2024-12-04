import { instance } from "./client";
import "./interceptor";

export const getParkingLots = async () => {
    const response = await instance.get("/parkinglots");
    return response.data;
};
