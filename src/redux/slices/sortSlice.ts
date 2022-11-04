import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export type SortState = {
    sortType: string;
    orderType: string;
    description: string;
};

const initialState:SortState = {
    sortType: '',
    orderType: 'desc',
    description: 'По умолчанию'
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort: (state,action: PayloadAction<SortState>) => {
            state.sortType = action.payload.sortType;
            state.orderType = action.payload.orderType;
            state.description = action.payload.description;
        }
    }
});

export const currentSort = (state:RootState) => state.sort;
export const {setSort} = sortSlice.actions;
const sort = sortSlice.reducer;
export default sort;
