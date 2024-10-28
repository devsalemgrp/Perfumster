import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error:false,
    newPageData: [],
    aAIHomeSection: [], 
    dIHomeSection: [],
}

const newPageSlice = createSlice(
    {
        name:'newPage',
        initialState,
        reducers:{
            getNewPageDataRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.newPageData = [];
            },
            getNewPageDataSuccess:(state,action)=>{
                state.loading = false;
                state.newPageData = action.payload;
                state.error = false;
            }
            ,
            getNewPageDataFailure :(state,action)=>{
                state.error = action.payload;
                state.newPageData = false ;
                state.packages = [];
            }
            ,
            aAIHomeSectionRequest:(state,action)=>{
                state.loading = true;
                state.aAIHomeSection = [];
                state.error = false;
            },
            aAIHomeSectionSuccess:(state,action)=>{
                state.loading = false;
                state.aAIHomeSection = action.payload;
                state.error = false;
            },
            aAIHomeSectionFailure:(state,action)=>{
                state.loading = false;
                state.error = action.payload;
                state.aAIHomeSection = [];
            },

            dIHomeSectionRequest:(state,action)=>{
                state.loading = true;
                state.dIHomeSection=[];
                state.error=false;
            },
            dIHomeSectionSuccess:(state,action)=>{
                state.loading = false;
                state.dIHomeSection=action.payload;
                state.error=false;
            },
            dIHomeSectionFailure:(state,action)=>{
                state.loading=false;
                state.dIHomeSection = [];
                state.error = action.payload;
            },
        }
    }
)

export const NewPageAction = newPageSlice.actions;
export default newPageSlice;