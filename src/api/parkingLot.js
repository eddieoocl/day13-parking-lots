import { instance } from "./client";

export const getParkingLots = async () => {
    const response = await instance.get("/parkingLots");
    return response.data;
};
