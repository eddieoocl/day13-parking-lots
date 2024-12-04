import { useEffect, useReducer } from "react";
import FetchAndParkComponent from "./FetchAndParkComponent";
import { initialState, parkingLotReducer } from "../context/parkingLotReducer";
import { getParkingLots } from "../api/todo";
import { ParkingLotsActionTypes } from "../enums/ParkingLotsActionTypes";
import { ParkingLotContext } from "../context/ParkingLotContext";

function ParkingLotPage() {
    const [state, dispatch] = useReducer(parkingLotReducer, initialState);

    const init = async () => {
        const parkingLots = await getParkingLots();
        dispatch({ type: ParkingLotsActionTypes.Set, payload: parkingLots ?? [] });
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <ParkingLotContext.Provider value={{ state, dispatch }}>
            <FetchAndParkComponent />
        </ParkingLotContext.Provider>
    );
}

export default ParkingLotPage;
