import React from 'react';

const Profile = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking);
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
       name, pickup, return_date, location,
     } = item;
     return (
       <tbody>
         <tr>
           <th scope="row">{item.model}</th>
           <td>{item.name}</td>
           <td>Otto</td>
           <td>@mdo</td>
         </tr>
       </tbody>
     );
   })
  }

      </table>
    </div>
  );
};

export default Profile;
