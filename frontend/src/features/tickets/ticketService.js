import axios from 'axios';

const API_URL = '/api/tickets/';

// Create new ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  }
  const response = await axios.post(API_URL, ticketData, config);

  return response.data;
};

// Logout User

// const logout = () => localStorage.removeItem('user');

// // Login User
// const login = async (userData) => {
//   const response = await axios.post(API_URL + 'login', userData);

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data));
//   }
//   return response.data;
// };

const ticketService = {
  createTicket
};

export default ticketService;
