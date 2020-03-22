import { GET_PACKAGES } from '../Actions'

const initialState = {
    Packages: [],
}

const PackagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PACKAGES: {
            return {
                ...state,
                Packages: action.payload,
            }
        }
        default:
            return state
    }
}

export default PackagesReducer