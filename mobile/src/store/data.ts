import { create } from "zustand";

export type Data = {
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  level: string;
  objective: string;
};

type DataStore = {
  data: Data;
  setPageOne: (data: Omit<Data, "gender" | "objective" | "level">) => void;
  setPageTwo: (data: Pick<Data, "gender" | "objective" | "level">) => void;
};

export const useData = create<DataStore>((set) => ({
  data: {
    name: "",
    weight: "",
    height: "",
    age: "",
    gender: "",
    level: "",
    objective: "",
  },
  setPageOne: (info) => set((state) => ({ data: {...state.data, ...info} }) ),
  setPageTwo: (info) => set((state) => ({ data: {...state.data, ...info} }) ),
}));