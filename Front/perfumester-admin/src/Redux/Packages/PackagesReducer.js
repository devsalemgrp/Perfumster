import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error:false,
    packages: [],
    editPackagesData:[],
    editPackageActivity:[],
}

const packagesSlice = createSlice(
    {
        name:'packages',
        initialState,
        reducers:{
            getPackagesRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.packages = [];
            },
            getPackagesSuccess:(state,action)=>{
                state.loading = false;
                state.packages = action.payload;
                state.error = false;
            }
            ,
            getPackagesFailure :(state,action)=>{
                state.error = action.payload;
                state.loading = false ;
                state.packages = [];
            },
            editPackagesRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.editPackagesData = [];
            },
            editPackagesSuccess:(state,action)=>{
                state.loading = false;
                state.editPackagesData = action.payload;
                state.error = false;
            }
            ,
            editPackagesFailure :(state,action)=>{
                state.error = action.payload;
                state.loading = false ;
                state.editPackagesData = [];
            },
            editPackagesActivityRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.editPackageActivity = [];
            },
            editPackagesActivitySuccess:(state,action)=>{
                state.loading = false;
                state.editPackageActivity = action.payload;
                state.error = false;
            }
            ,
            editPackagesActivityFailure :(state,action)=>{
                state.error = action.payload;
                state.loading = false ;
                state.editPackageActivity = [];
            },

        }
    }
)

export const PackageAction = packagesSlice.actions;
export default packagesSlice;