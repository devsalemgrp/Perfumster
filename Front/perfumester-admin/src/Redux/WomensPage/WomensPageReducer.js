import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error:false,
    womenPageData: [],
    aAIHomeSection: [], 
    dIHomeSection: [],
    rIRecommendedSection: [],
    dIRecommendedSection: [],
    rISpecialSection: [],
    dISpecialSection: [], 
    dISpecialBackgroundData:[]

}

const womenPageSlice = createSlice(
    {
        name:'womenPage',
        initialState,
        reducers:{
            getWomenPageDataRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.womenPageData = [];
            },
            getWomenPageDataSuccess:(state,action)=>{
                state.loading = false;
                state.womenPageData = action.payload;
                state.error = false;
            }
            ,
            getWomenPageDataFailure :(state,action)=>{
                state.error = action.payload;
                state.womenPageData = [] ;
                state.loading =false;
            },

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

            rIRecommendedSectionRequest:(state,action)=>{
                state.loading=true;
                state.rIRecommendedSection= [];
                state.error = false;
            },
            rIRecommendedSectionSuccess:(state,action)=>{
                state.loading=false;
                state.rIRecommendedSection = action.payload;
                state.error = false;
            },
            rIRecommendedSectionFailure:(state,action)=>{
                state.loading=false;
                state.rIRecommendedSection = [];
                state.error = true;
            },

            dIRecommendedSectionRequest:(state,action)=>{
                state.loading = true;
                state.dIRecommendedSection=[];
                state.error=false;
            },
            dIRecommendedSectionSuccess:(state,action)=>{
                state.loading = false;
                state.dIRecommendedSection=action.payload;
                state.error=false;
            },
            dIRecommendedSectionFailure:(state,action)=>{
                state.loading=false;
                state.dIRecommendedSection = [];
                state.error = action.payload;
            },
            rISpecialSectionRequest:(state,action)=>{
                state.loading=true;
                state.rISpecialSection= [];
                state.error = false;
            },
            rISpecialSectionSuccess:(state,action)=>{
                state.loading=false;
                state.rISpecialSection = action.payload;
                state.error = false;
            },
            rISpecialSectionFailure:(state,action)=>{
                state.loading=false;
                state.rISpecialSection = [];
                state.error = true;
            },
            dISpecialSectionRequest:(state,action)=>{
                state.loading = true;
                state.dISpecialSection=[];
                state.error=false;
            },
            dISpecialSectionSuccess:(state,action)=>{
                state.loading = false;
                state.dISpecialSection=action.payload;
                state.error=false;
            },
            dISpecialSectionFailure:(state,action)=>{
                state.loading=false;
                state.dISpecialSection = [];
                state.error = action.payload;
            },
            dISpecialBackgroundSectionRequest:(state,action)=>{
                state.loading = true;
                state.dISpecialBackgroundData=[];
                state.error=false;
            },
            dISpecialBackgroundSectionSuccess:(state,action)=>{
                state.loading = false;
                state.dISpecialBackgroundData=action.payload;
                state.error=false;
            },
            dISpecialBackgroundSectionFailure:(state,action)=>{
                state.loading=false;
                state.dISpecialBackgroundData = [];
                state.error = action.payload;
            },


        }
    }
)

export const WomenPageAction = womenPageSlice.actions;
export default womenPageSlice ; 
