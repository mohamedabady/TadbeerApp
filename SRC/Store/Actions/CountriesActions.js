import {GET_COUNTRIES} from '.';

export const GetCountries = (countries)=>{
    return {
        type : GET_COUNTRIES,
        payload: countries
    }
}