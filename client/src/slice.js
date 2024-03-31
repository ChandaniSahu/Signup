import {createSlice} from '@reduxjs/toolkit';

const initialState={
noteID :''
}

const slice = createSlice({
    name:'detail',
    initialState,
    reducers :{
        addNoteID : (state ,action)=>{
            state.noteID=action.payload
        },
        flush : (state, action)=>{
          return initialState;
        }
    }
})

export const {addNoteID,flush}=slice.actions ;
export default slice.reducer