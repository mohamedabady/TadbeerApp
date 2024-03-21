import { combineReducers } from 'redux';
import PackagesReducer from './PackagesReducer';
import CountriesReducer from './CountriesReducer';
import WorkersReducer from './WorkerReducer';

export default combineReducers({
    Packages: PackagesReducer,
    Countries: CountriesReducer,
    Workers: WorkersReducer
})