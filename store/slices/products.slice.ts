import { IProduct } from "@/constants/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProductsState {
    allProducts: IProduct[],
    favouriteProducts: IProduct[]
}

const initialState: IProductsState = {
    allProducts: [],
    favouriteProducts: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setAllProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.allProducts = action.payload
            // console.log(state, 'succesfully completed')
        }
    }
})

export const { setAllProducts } = productsSlice.actions

export default productsSlice.reducer