import { instance } from "./client";
import "./interceptor";

export const getParkingLots = async () => {
    const response = await instance.get("/parkingLots");
    return response.data;
};
