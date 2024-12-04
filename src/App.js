import { createContext, useEffect, useReducer } from "react";
import "./App.css";
import FetchAndParkComponent from "./components/FetchAndParkComponent";
import { initialState, parkingLotReducer } from "./context/parkingLotReducer";
import { getParkingLots } from "./api/todo";
import { ParkingLotsActionTypes } from "./enums/ParkingLotsActionTypes";

export const ParkingLotContext = createContext();

function App() {
    const [state, dispatch] = useReducer(parkingLotReducer, initialState);

    const init = async () => {
        const parkingLots = await getParkingLots();
        dispatch({ type: ParkingLotsActionTypes.Set, payload: parkingLots });
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div className="App">
            <ParkingLotContext.Provider value={{ state, dispatch }}>
                <FetchAndParkComponent />
            </ParkingLotContext.Provider>
        </div>
    );
}

export default App;
