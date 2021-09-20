import SET_USER from '../constants/index';

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export default setUser;
