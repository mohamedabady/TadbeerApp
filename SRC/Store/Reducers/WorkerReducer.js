import { GET_WORKERS } from '../Actions'

const initialState = {
    Workers: [],
}

const WorkersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKERS: {
            return {
                ...state,
                Workers: action.payload,
            }
        }
        default:
            return state
    }
}

export default WorkersReducer