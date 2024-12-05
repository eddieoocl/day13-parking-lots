import { ParkingLotActionTypes } from "../enums/ParkingLotActionTypes";

export const parkingBoyInitialState = [];

export const parkingBoyReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ParkingLotActionTypes.Set: {
            return payload;
        }
        default:
            return state;
    }
};
