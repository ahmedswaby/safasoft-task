import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Company } from './store/RegisterCompany'
const store = configureStore({
  reducer: {
    [Company.reducerPath]: Company.reducer,
  
  },
  devTools: JSON.parse(import.meta.env.VITE_DEBUG_MODE),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
    .concat(Company.middleware)

     
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
