import React from 'react'


const Loading = () => {
   return ( 
      <div class="position-absolute top-50 start-50 translate-middle">
         <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
         </div>
      </div>
    );
}
 
export default Loading;