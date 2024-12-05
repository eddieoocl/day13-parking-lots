import { useReducer } from "react";
import FetchAndParkComponent from "./FetchAndParkComponent";
import { parkingLotInitialState, parkingLotReducer } from "../context/parkingLotReducer";
import { ParkingLotContext } from "../context/ParkingLotContext";
import ParkingLots from "./ParkingLots";
import { ParkingBoyContext } from "../context/ParkingBoyContext";
import { parkingBoyInitialState, parkingBoyReducer } from "../context/parkingBoyReducer";

function ParkingLotPage() {
    const [parkingLotState, parkingLotDispatch] = useReducer(
        parkingLotReducer,
        parkingLotInitialState
    );
    const [parkingBoyState, parkingBoyDispatch] = useReducer(
        parkingBoyReducer,
        parkingBoyInitialState
    );

    return (
        <ParkingLotContext.Provider
            value={{ state: parkingLotState, dispatch: parkingLotDispatch }}
        >
            <ParkingBoyContext.Provider
                value={{ state: parkingBoyState, dispatch: parkingBoyDispatch }}
            >
                <FetchAndParkComponent />
                <ParkingLots />
            </ParkingBoyContext.Provider>
        </ParkingLotContext.Provider>
    );
}

export default ParkingLotPage;
