import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Loading from './loading';

const UserEdit = () => {
   const [users, setUser] = useState()
   const [data, setData] = useState({name:'', email:'',phone:''})
   useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/users/1").then((result) => {
   setUser(result.data)
   });
   }, []);

   const handleChange = ({target}) => {
      
      setData((prevState)=> ({
         ...prevState,
         [target.name]:target.value
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      localStorage.setItem('user',JSON.stringify({
         name:data.name,
         email:data.email,
         phone:data.phone
      }) ) 
   }

   return (
      <div>
      {users ? <div>
         <div class="container">
            <form action="">
               <div id="wizard">
               <section>
                  <div class="form-row"> <input name='name' value={data.name} onChange={handleChange}  type="text" class="form-control" placeholder={users.name}/></div>
                  <div class="form-row"> <input name='email' value={data.email} onChange={handleChange} type="text" class="form-control" placeholder={users.email}/></div>
                  <div class="form-row"> <input name='phone' value={data.phone} onChange={handleChange} type="text" class="form-control" placeholder={users.phone}/></div> 
               </section>
               <button  onClick={handleSubmit}  >Save edit</button>
               <Link class="m-2" to='/'><button>Назад к профилю</button></Link>
        </div>
        
    </form>
</div>
</div> 
   : <Loading/>
}
</div>
    );
}
 
export default UserEdit;