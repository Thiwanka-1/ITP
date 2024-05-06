import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext'; // Adjust path as needed

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to the login page if the user is not logged in
    return <Navigate to="/login" />;
  }

  // Otherwise, return the children (the protected content)
  return children;
};

export default ProtectedRoute;
