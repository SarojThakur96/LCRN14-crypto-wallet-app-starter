import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface tradeModalState{

    istradeModal:boolean;
}

const initialState:tradeModalState = {
      istradeModal:false,
}

const tradeModalSlice= createSlice({
    name:'trade',
    initialState,
    reducers:{

        settradeModal:(state)=>{
           
               state.istradeModal === true ? 
               state.istradeModal = false : state.istradeModal=true
        }

    }

})

export const {settradeModal} = tradeModalSlice.actions

export default tradeModalSlice.reducer