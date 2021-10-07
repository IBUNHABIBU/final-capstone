import React from 'react'

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
  
   </table>
  </div>
 )
}

export default Profile
