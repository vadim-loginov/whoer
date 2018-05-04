import http from '../services/http';

function getLanguages() {
  return http.get('/languages');
}

export default {
  getLanguages,
};
