import React from 'react';
import { useSelector } from 'react-redux';

const Appointment = () => {
  // const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking);
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        {
   bookings.map((item) => {
     const {
       name, pickup, location,
     } = item;
     return (
       <tbody>
         <tr>
           <th scope="row">{name}</th>
           <td>{pickup}</td>
           <td> Hello </td>
           <td>{location}</td>
         </tr>
       </tbody>
     );
   })
  }
      </table>
    </div>
  );
};

export default Appointment;
