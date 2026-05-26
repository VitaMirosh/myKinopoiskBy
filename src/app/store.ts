import {configureStore} from '@reduxjs/toolkit';
import {appReducer, appSlice} from '@/app/app-slice/app-slice.ts';
import {setupListeners} from '@reduxjs/toolkit/query';
import {baseApi} from '@/app/baseApi/baseApi.ts';


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [appSlice.name]: appReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch