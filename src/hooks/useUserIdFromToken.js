import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const useUserIdFromToken = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getUserId = () => {
      const userToken = localStorage.getItem('token');
      if (userToken) {
        const decodedToken = jwtDecode(userToken);
        setUserId(decodedToken.user_id);
      }
    };

    getUserId();
  }, []);

  return userId;
};

export default useUserIdFromToken;