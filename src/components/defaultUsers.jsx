import React, { useEffect, useState } from 'react'
import Loading from './loading';
import axios from 'axios'
import UserList from './userList';
import { Link } from 'react-router-dom';

const DefaultUsers = ({user}) => {
   const [users, setUser] = useState()

   useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/users/1").then((result) => {
   setUser(result.data)
   });
   }, []);

return (
   <div>
      {users ? <div>
            {
               <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
              <div class="card p-4"> <div class=" image d-flex flex-column justify-content-center align-items-center">  <button class="btn btn-secondary">
               <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />
               </button>
               
               <span class="name mt-1">
                  {users.name}
               </span>
               <span class="idd">
                  Address - {users.address.city} - {users.address.street}
               </span>
               <span class="name">
                  Phone - {users.phone}
               </span>
                 <div class="d-flex flex-row justify-content-center align-items-center "> 
                  <span class="number">
                     Email - {users.email}
                  </span>
               </div>
               <span class="mt-3">
                  Company - {users.company.name}
               </span>
               <Link to='/edit'><button  type="button" class="btn mt-1" >
        edit user
      </button>
      </Link>
            </div>
         </div>
      </div>
   }      
</div> 
   : <Loading/>
}
</div>
);
}
 
export default DefaultUsers;