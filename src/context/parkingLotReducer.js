import { ParkingLotActionTypes } from "../enums/ParkingLotActionTypes";

export const parkingLotInitialState = [];

export const parkingLotReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ParkingLotActionTypes.Set: {
            return payload;
        }
        case ParkingLotActionTypes.Add: {
            return [payload, ...state];
        }
        case ParkingLotActionTypes.Remove: {
            return state.filter((todo) => todo.id !== payload);
        }
        case ParkingLotActionTypes.Edit: {
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
