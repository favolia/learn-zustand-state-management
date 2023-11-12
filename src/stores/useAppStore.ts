// import { create } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type TCount = {
    count: number;
    increase: (c: number) => void;
    decrease: (c: number) => void;
}

type TName = {
    name: string;
    updateName: (newName: string) => void;
}

export const useAppStore = createWithEqualityFn<TCount & TName>()((set) => ({
    count: 0,
    increase: (c) => set((state: TCount) => ({ count: state.count+c })),
    decrease: (c) => set((state: TCount) => ({ count: state.count-c })),

    name: 'defavolia',
    updateName: (newName) => set((state: TName) => ({ name: state.name = newName }))
}), shallow)