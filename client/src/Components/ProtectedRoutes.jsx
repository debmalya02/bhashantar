// import React from 'react';
// import { useSelector, Outlet } from 'react-redux';

// const ProtectedRoutes = ({ roles }) => {
//   const user = useSelector((state) => state.auth.user);
//   const isAuthenticated = user && user.isAuthenticated; 
//   const hasRequiredRole = roles.some((role) => user && user.role === role); 

//   return isAuthenticated && hasRequiredRole ? <Outlet /> : <div>Unauthorized</div>;
// };

// export default ProtectedRoutes;




// import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

const ProtectedRoute = ({isAuthenticated}) => {
  // const { isAuthenticated} = useSelector((state) => state.auth)

  // show unauthorized screen if no user is found in redux store
  if (!isAuthenticated) {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :(</h1>
        <span>
          <Link to='/'>Login</Link> to gain access
        </span>
      </div>
    )
  }

  return <Outlet />
}

export default ProtectedRoute
