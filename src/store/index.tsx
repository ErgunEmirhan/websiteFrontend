import { useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
    }
})


export type enterpriseDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const enterpriseUseSelector = useSelector.withTypes<RootState>();

export default store;