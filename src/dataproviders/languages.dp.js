import http from '../services/http';

function getLanguages() {
  return http.get('languages').then(({ data }) => data);
}

export default {
  getLanguages,
};
