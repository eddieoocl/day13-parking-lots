import { ParkingBoyActionTypes } from "../enums/ParkingBoyActionTypes";

export const parkingBoyInitialState = { parkingBoys: [], latestTicket: null };

export const parkingBoyReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ParkingBoyActionTypes.SetParkingBoy: {
            return { ...state, parkingBoys: payload };
        }
        case ParkingBoyActionTypes.SetLatestTicket: {
            return { ...state, latestTicket: payload };
        }
        default:
            return state;
    }
};
