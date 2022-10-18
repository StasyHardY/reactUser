
import { Link } from 'react-router-dom';
import DefaultUsers from './defaultUsers';



const UserList = ({user}) => {
   let newUser = localStorage.getItem('user')
   localStorage.getItem('user')
   const finalUser= JSON.parse(newUser)

         return ( 
            <div>
            {
               newUser ? <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
              <div class="card p-4"> <div class=" image d-flex flex-column justify-content-center align-items-center">  <button class="btn btn-secondary">
               <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />
               </button>
               
               <span class="name mt-1">
                  {finalUser.name}
               </span>
               <span class="idd">
                  Address - {user.address.city} - {user.address.street}
               </span>
               <span class="name">
                  Phone - {finalUser.phone}
               </span>
                 <div class="d-flex flex-row justify-content-center align-items-center "> 
                  <span class="number">
                     Email - {finalUser.email}
                  </span>
               </div>
               <span class="mt-3">
                  Company - {user.company.name}
               </span>
               <Link to='/edit'><button type="button" class="btn btn-dark mt-3">Edit User</button>
      </Link>
            </div>
         </div>
      </div> : <DefaultUsers/>
            }      
      </div>
          );
       }

export default UserList;