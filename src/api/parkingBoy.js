import { instance } from "./client";
import "./interceptor";

export const getParkingBoys = async () => {
    const response = await instance.get("/parkingBoys");
    return response.data;
};
