import { createContext } from "react";

export interface PotpisContextType {
    value : string,
    setValue : (newValue: string) => void;
}

export const potpis = createContext<PotpisContextType>({
    value: "Tin Fićok",
    setValue: () => {}
});