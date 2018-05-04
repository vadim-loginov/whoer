// import http from '../services/http';

function getTranslations() {
  // return http.get('/translations', {
  //   headers: {
  //     'Accept-Language': languageCode,
  //   },
  // });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: JSON.parse('[{"created":1525279758,"id":1,"name":"test","snippet":"Тест!","updated":1525396608},{"created":1525279781,"id":2,"name":"cat","snippet":"Кошка","updated":1525279852},{"created":1525279795,"id":3,"name":"dog","snippet":"Собака","updated":1525279857},{"created":1525279809,"id":4,"name":"phone","snippet":"Телефон","updated":1525279860},{"created":1525279826,"id":5,"name":"browser","snippet":"Браузер","updated":1525279865},{"created":1525279842,"id":6,"name":"russia","snippet":"Россия","updated":1525279869},{"created":1525279941,"id":7,"name":"vpn_connect","snippet":"Подключение к VPN сети","updated":1525279956},{"created":1525309583,"id":8,"name":"bla","snippet":"Бла","updated":1525396491},{"created":1525428156,"id":11,"name":"blaha","snippet":"Бляха-муха","updated":1525428156},{"created":1525430469,"id":12,"name":"blaham","snippet":"Бляха-муха","updated":1525430469},{"created":1525430823,"id":13,"name":"blahamh","snippet":"Бляха-муха-ха","updated":1525430823},{"created":1525431291,"id":14,"name":"blahamhh","snippet":"Бляха-муха-ха-ха","updated":1525431291},{"created":1525431313,"id":15,"name":"blahamhhj","snippet":"asdfghjksdfl;","updated":1525438062}]'),
      });
    }, 500);
  });
}

export default {
  getTranslations,
};
