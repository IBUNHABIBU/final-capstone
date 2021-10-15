
import actionTypes from '../redux/constants';
import bookingReducer from './../redux/reducers/bookingReducer';
import carReducer from './../redux/reducers/carReducer';
describe('Reducers', () => {
  describe('bookingReducer', () => {
   it('Should return default state when there is no action', () => {
    const newState = bookingReducer(undefined, []);
    const defaultState = [];
    expect(newState).toEqual(defaultState);
   });
   it('Should return new state when given action', () => {
    const data = [
     {
      name: "Juma",
      model: 'New model',
      pickup_date: '2021-10-17 23:00',
      return_date: '2021-10-18 23:00',
      year: '2008',
     }
    ]
    const newState = bookingReducer(undefined, {
     type: actionTypes.BOOK_CAR,
     payload: data,
    });
    expect(newState).toEqual(data);
   })
  })

  describe('carReducer', () => {
   it('Should return default state when there is no action', () => {
    const newState = carReducer(undefined, []);
    const defaultState = [];
    expect(newState).toEqual(defaultState);
   });
   it('Should return new state when given action', () => {
    const data =
     [{
      color: "Red",
        engine: "v8",
        year: "2021",
        car_model: "new model",
        price: "800usd",
     }]

    const newState = carReducer(undefined, {
     type: actionTypes.ADD_CAR,
     payload: data,
    });

    expect(newState).toEqual(data);

   })
  })
  describe('bookingReducer', () => {
   it('Should return default state when there is no action', () => {
    const newState = bookingReducer(undefined, []);
    const defaultState = [];
    expect(newState).toEqual(defaultState);
   });
   it('Should return new state when given action', () => {
    const data = [
     {
      name: "Juma",
      model: 'New model',
      pickup_date: '2021-10-17 23:00',
      return_date: '2021-10-18 23:00',
      year: '2008',
     },
    ]
    const newState = bookingReducer(undefined, {
     type: actionTypes.BOOK_CAR,
     payload: data,
    });

    expect(newState).toEqual(data);

   })
  })
});
