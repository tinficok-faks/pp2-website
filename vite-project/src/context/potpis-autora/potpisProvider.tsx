import { useState } from "react";
import { potpis } from "./potpis";

export function  PotpisProvider({children} : {children : React.ReactNode}) {
    const [value, setValue] = useState("Tin Fićok");

    return (
        <potpis.Provider value={{value, setValue}}>
            {children}
        </potpis.Provider>
    );
}