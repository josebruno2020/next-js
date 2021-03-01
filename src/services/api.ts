import AsyncLocalStorage from '@createnextapp/async-local-storage';
import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:8000/api'
});

// api.addAsyncRequestTransform(request => async() => {
//   const token = await AsyncLocalStorage.getItem('@user_token');

//   if(token){
//     request.headers['Authorization'] = `Bearer ${token}`;
//   }
// });

api.addResponseTransform(response => {
  if(!response.ok) throw response;
});

export default api;

