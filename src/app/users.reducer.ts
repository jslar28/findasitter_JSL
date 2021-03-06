import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: UsersState = {isBaby: undefined, babies: [], sitters: [{
  firstname: 'Jakob', lastname: 'Larsen', age: 23, yearsOfExperience: 4, region: "Søborg", picture: "N/A", gender: 'Male', phone: "20202020", ratings: [5]
}]}

export function usersReducer(state: UsersState = INITIAL_STATE, action:any) {
 
  switch (action.type) {
    case UsersActions.ADD_BABY: // action.payload is baby: Baby
    // How to add an object to an array of objects without modifying the existing array?
      return tassign(state, {babies: [...state.babies, action.payload]});

    // return {...state, babies:[...state.babies, action.payload] };

    // state.babies.push(action.payload);
    // return state;

    case UsersActions.SET_TYPE: // action.payload is isBaby: boolean

    // state.isBaby = action.payload;
    // return state;

    // return Object.assign({}, state, {isBaby: action.payload, foo: 1});
    return tassign(state, { isBaby: action.payload});

    case UsersActions.ADD_RATING:

    //Selecting first for now
    //let selectedSitter = action.payload.sitters[0];
    


    return tassign(state, {sitters: [...state.sitters, action.payload]});
 
    default:
     return state;
 }
}
