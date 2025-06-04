import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedRegion: null,
    regionData: null,
};

export const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        setSelectedRegion: (state, action) => {
            state.selectedRegion = action.payload.regionName;
            state.regionData = action.payload.regionData;
        },
        clearSelectedRegion: (state) => {
            state.selectedRegion = null;
            state.regionData = null;
        },
    },
});

export const { setSelectedRegion, clearSelectedRegion } = regionSlice.actions;

export default regionSlice.reducer;