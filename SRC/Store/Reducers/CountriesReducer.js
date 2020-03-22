import { GET_COUNTRIES } from '../Actions'

const initialState = {
    Countries: [],
}

const CountriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES: {
            return {
                ...state,
                Countries: action.payload,
            }
        }
        default:
            return state
    }
}

export default CountriesReducer