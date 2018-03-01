import api from '../api';

export const getPersonDetails = (id) => () => api.Person.getPersonDetails(id);
