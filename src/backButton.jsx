import React from 'react';
import { Link } from "react-router-dom";

const BackButton = () => {
   return <Link to='/'>
      <button className='btn btn-danger text-light'>
         back
      </button>
   </Link>
}

export default BackButton;