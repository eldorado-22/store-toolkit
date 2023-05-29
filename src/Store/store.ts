import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productSliceReducer from "./Reducer/ProductSlice";
import BasketSlice from "./Reducer/BasketSlice";


const rootReducer = combineReducers({
    productSliceReducer,
    BasketSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type rootState = ReturnType<typeof rootReducer>
type appStore = ReturnType<typeof  setupStore>
export type appDispatch = appStore['dispatch']