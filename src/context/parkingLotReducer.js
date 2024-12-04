import { ParkingLotsActionTypes } from "../enums/ParkingLotsActionTypes";

export const initialState = [];

export const parkingLotReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ParkingLotsActionTypes.Set: {
            return payload;
        }
        case ParkingLotsActionTypes.Add: {
            return [payload, ...state];
        }
        case ParkingLotsActionTypes.Remove: {
            return state.filter((todo) => todo.id !== payload);
        }
        case ParkingLotsActionTypes.Edit: {
            return state.map((todo) => {
                if (todo.id === payload.id) {
                    todo = payload;
                }
                return todo;
            });
        }
        default:
            return state;
    }
};
