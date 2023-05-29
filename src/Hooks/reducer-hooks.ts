import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appDispatch, rootState} from "../Store/store";


export const UseAppSelector: TypedUseSelectorHook<rootState> = useSelector


export const UseAppDispatch = () => useDispatch<appDispatch>()