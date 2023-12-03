import { useEffect, useId, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      const userId = decodedToken.user_id;

      const checkIsUserAdmin = async () => {
        try {
          console.log(userId);
          const response = await axios.post(
            'http://localhost/TripTipApi/backend/isAdmin.php',
            {
              userId: userId,
            }
          );
          console.log(response);
          const isAdminValue = parseInt(response.data.is_admin, 10); // Konwersja na liczbę
          console.log('czy admin w use', isAdminValue);
          setIsAdmin(isAdminValue === 1); // Ustawienie wartości isAdmin na podstawie odpowiedzi z serwera
        } catch (error) {
          console.error('Wystąpił błąd:', error);
        }
      };

      checkIsUserAdmin();
    }
  }, []);

  console.log(isAdmin);
  return isAdmin;
};

export default useIsAdmin;
