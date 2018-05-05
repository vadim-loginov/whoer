import { Message } from 'element-ui';
import http from '../services/http';

function getTranslations(languageCode) {
  return http.get('translations', {
    withCredentials: true,
    headers: {
      'Accept-Language': languageCode,
    },
  });
}

function deleteTranslation(id) {
  return http.delete(`translation/${id}`, {
    withCredentials: true,
  });
}

function updateTranslation(languageCode, { id, snippet }) {
  return http.put(
    `translation/${id}`,
    { snippet },
    {
      withCredentials: true,
      headers: {
        'Accept-Language': languageCode,
      },
    },
  );
}

function createTranslation(languageCode, { name, snippet }) {
  return http
    .post(
      'translation',
      { name, snippet },
      {
        withCredentials: true,
        headers: {
          'Accept-Language': languageCode,
        },
      },
    )
    .then(resp => resp.data)
    .catch((error) => {
      Message({
        showClose: true,
        message: 'Ошибка! Не удалось создать перевод.',
        type: 'error',
      });
      throw error;
    });
}

export default {
  getTranslations,
  deleteTranslation,
  updateTranslation,
  createTranslation,
};
