import React from 'react';


const Footer = () => {

   const style = {
      marginTop: '3rem',
      paddingBottom: '0.5rem'
   }

   return <>
      <div className='container-fluid bg-dark text-danger mt-2' style={ style }>
         <div className='row'>
            <div className='col-md-12' style={ style }>
               <h3>made by louis.</h3>
            </div>
         </div>
      </div>
   </>
}

export default Footer;