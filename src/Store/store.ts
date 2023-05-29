import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productSliceReducer from "./Reducer/ProductSlice";


const rootReducer = combineReducers({
    productSliceReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type rootState = ReturnType<typeof rootReducer>
type appStore = ReturnType<typeof  setupStore>
export type appDispatch = appStore['dispatch']