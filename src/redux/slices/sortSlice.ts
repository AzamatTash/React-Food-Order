import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export type SortState = {
    sortType: string;
    orderType: string;
    description: string;
    searchValue: string;
};

const initialState:SortState = {
    sortType: '',
    orderType: 'desc',
    description: 'По умолчанию',
    searchValue: ''
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort: (state, action: PayloadAction<string>) => {
            state.sortType = action.payload;
        },
        setOrderType: (state, action: PayloadAction<string>) => {
            state.orderType = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        SetSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    }
});

export const currentSort = (state:RootState) => state.sort;
export const currentSearchValue = (state:RootState) => state.sort.searchValue;

export const {setSort, setOrderType, setDescription, SetSearchValue} = sortSlice.actions;

const sort = sortSlice.reducer;
export default sort;
