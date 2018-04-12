var deepFreeze = require('deep-freeze');
import { usersReducer } from './users.reducer';
import * as types from './users.actions';
import { Sitter } from './entities/sitter';

describe('users reducer', () => {

  let initialSitterArray = [
    {firstname: 'Jakob', lastname: 'Larsen', age: 23, yearsOfExperience: 4, region: "Søborg", picture: "N/A", gender: 'Male', phone: "20202020", ratings: [5]}
  ];
  let initialState = {isBaby: undefined, babies: [], sitters: initialSitterArray};
  let state;
  beforeEach(function() {
    state = initialState;
  });
 
 it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(initialState);
 });

 it('should toggle isBaby or sitter', () => {
   deepFreeze(state);

   expect( usersReducer(state, { 
     type: types.UsersActions.SET_TYPE, 
     payload: true 
    })).toEqual({isBaby: true, babies: [], sitters: initialSitterArray});
 });

 it('should add a new baby object to array of babies', () => {
  deepFreeze(state);

  let newBaby = { firstname: 'Roland', postalCode: '2400', picture: 'no picture yet', age: 8, gender: 'MALE' };

  expect( usersReducer(state, { 
    type: types.UsersActions.ADD_BABY, 
    payload: newBaby
   })).toEqual({isBaby: undefined, babies: [{ firstname: 'Roland', postalCode: '2400', picture: 'no picture yet', age: 8, gender: 'MALE' }], sitters: initialSitterArray});
});

it('should add a new rating to a sitter', () => {
  deepFreeze(state);

  let newRating = 5;
  let sitter = { firstname: 'Jakob', lastname: 'Larsen', age: 23, yearsOfExperience: 4, region: "Søborg", picture: "N/A", gender: 'Male', phone: "20202020", ratings: [newRating] }
  let newSitterArray = [sitter, sitter];

  expect( usersReducer(state, {
    type: types.UsersActions.ADD_RATING,
    payload: sitter
  })).toEqual( { isBaby: undefined, babies: [], sitters: newSitterArray } ) // .toEqual...
});


});
