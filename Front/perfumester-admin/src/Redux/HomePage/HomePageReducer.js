import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error:false,
    homePageData: [],
    aAIHomeSectionData: [],
    dIHomeSectionData: [],
    editHeroSectionData: [],
    replaceSection2Image: [],
    deleteSection2Image: [],
    editCtaSectionData: [], 
}

const homePageSlice = createSlice(
    {
        name:'homePage',
        initialState,
        reducers:{
            getHomePageDataRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.homePageData = [];
            },
            getHomePageDataSuccess:(state,action)=>{
                state.loading = false;
                state.homePageData = action.payload;
                state.error = false;
            }
            ,
            getHomePageDataFailure :(state,action)=>{
                state.error = action.payload;
                state.homePageData = false ;
                state.packages = [];
            },
            aAIHomeSectionRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.aAIHomeSectionData = [];
            },
            aAIHomeSectionSuccess:(state,action)=>{
                state.loading = false;
                state.aAIHomeSectionData = action.payload;
                state.error = false;
            }
            ,
            aAIHomeSectionFailure :(state,action)=>{
                state.error = action.payload;
                state.aAIHomeSectionData = [] ;
                state.loading = false;
            },


            dIHomeSectionRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.dIHomeSectionData = [];
            },
            dIHomeSectionSuccess:(state,action)=>{
                state.loading = false;
                state.dIHomeSectionData = action.payload;
                state.error = false;
            }
            ,
            dIHomeSectionFailure :(state,action)=>{
                state.error = action.payload;
                state.dIHomeSectionData = [] ;
                state.loading = false;
            },


            editHeroSectionRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.editHeroSectionData = [];
            },
            editHeroSectionSuccess:(state,action)=>{
                state.loading = false;
                state.editHeroSectionData = action.payload;
                state.error = false;
            },
            editHeroSectionFailure :(state,action)=>{
                state.error = action.payload;
                state.editHeroSectionData = [] ;
                state.loading = false;
            },


            replaceSection2ImageRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.replaceSection2Image = [];
            },
            replaceSection2ImageSuccess:(state,action)=>{
                state.loading = false;
                state.replaceSection2Image = action.payload;
                state.error = false;
            },
            replaceSection2ImageFailure :(state,action)=>{
                state.error = action.payload;
                state.replaceSection2Image = [] ;
                state.loading = false;
            },
            deleteSection2ImageRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.deleteSection2Image = [];
            },
            deleteSection2ImageSuccess:(state,action)=>{
                state.loading = false;
                state.deleteSection2Image = action.payload;
                state.error = false;
            },
            deleteSection2ImageFailure :(state,action)=>{
                state.error = action.payload;
                state.deleteSection2Image = [] ;
                state.loading = [];
            },
            editCtaSectionRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.editCtaSectionData = [];
            },
            editCtaSectionSuccess:(state,action)=>{
                state.loading = false;
                state.editCtaSectionData = action.payload;
                state.error = false;
            },
            editCtaSectionFailure :(state,action)=>{
                state.error = action.payload;
                state.editCtaSectionData = [] ;
                state.loading = false;
            }
 
        }
    }
)

export const HomePageAction = homePageSlice.actions;
export default homePageSlice