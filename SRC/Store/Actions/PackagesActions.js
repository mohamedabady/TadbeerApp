import {GET_PACKAGES} from '.';

export const GetPackages = (packages)=>{
    return {
        type : GET_PACKAGES,
        payload: packages
    }
}