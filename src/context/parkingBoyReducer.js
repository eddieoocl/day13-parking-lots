import { ParkingBoyActionTypes } from "../enums/ParkingBoyActionTypes";

export const parkingBoyInitialState = {
    parkingBoys: [],
    latestTicket: null,
    latestCar: null,
};

export const parkingBoyReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ParkingBoyActionTypes.SetParkingBoy: {
            return { ...state, parkingBoys: payload };
        }
        case ParkingBoyActionTypes.SetLatestTicket: {
            return { ...state, latestTicket: payload };
        }
        case ParkingBoyActionTypes.SetLatestCar: {
            return { ...state, latestCar: payload };
        }
        default:
            return state;
    }
};
