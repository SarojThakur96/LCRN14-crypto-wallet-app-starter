import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface DocumentState{
    doc: string[];
}

const initialState:DocumentState = {
     doc:[]
}

const documentSlice = createSlice({
  name: 'doc',
  initialState,
  reducers: {
    replaceDocument:(state, action: PayloadAction<any>) => {
       state.doc = action.payload
    },
    addDocument: (state, action: PayloadAction<any>) => {
      state.doc.push(action.payload);
    },
    removeDocument: (state,action: PayloadAction<any>) => {
      state.doc=state.doc.filter((item)=> item!==action.payload);
    },
    discardDocument: state => {
      state.doc = [];
    },
  },
});

export const { replaceDocument,addDocument,removeDocument,discardDocument } = documentSlice.actions

export default documentSlice.reducer
