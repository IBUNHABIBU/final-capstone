
import bookingReducer from './../redux/reducers/bookingReducer';
describe('Reducers', () => {
  describe('bookingReducer', () => {
   it('Should return default state when there is no action', () => {
    const newState = bookingReducer(undefined, []);
    const defaultState = [];
    expect(newState).toEqual(defaultState);
   })
  })
});