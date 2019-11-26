import axios from 'axios';

export const configureAPI = () => {
  return axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 1000 * 5,
    withCredentials: true,
  });
};

