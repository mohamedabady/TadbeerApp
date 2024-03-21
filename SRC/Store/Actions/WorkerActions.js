import {GET_WORKERS} from '.';

export const GetWorkers = (workers)=>{
    return {
        type : GET_WORKERS,
        payload: workers
    }
}