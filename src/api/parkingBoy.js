import { instance } from "./client";

export const getParkingBoys = async () => {
    const response = await instance.get("/parkingBoys");
    return response.data;
};

export const park = async (dto) => {
    const response = await instance.post("/parkingBoys/park", dto);
    return response.data;
};

export const fetch = async (dto) => {
    const response = await instance.post("/parkingBoys/fetch", dto);
    return response.data;
};
