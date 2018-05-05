import { Message } from 'element-ui';
import config from '../config';
import bus from './bus';


let eventSource;

function start() {
  if (!window.EventSource) {
    Message.warning({
      message: 'Не могу подписаться на обновления данных',
    });
    return;
  }

  eventSource = new EventSource(config.stream, {
    withCredentials: true,
  });

  // eventSource.addEventListener('open', function eventSourceOpen(e) {
  //   console.log("Соединение открыто");
  // });

  // eventSource.addEventListener('error', function eventSourceError(e) {
  //   if (e.readyState == EventSource.CONNECTING) {
  //     console.log("Соединение порвалось, пересоединяемся...");
  //   } else {
  //     console.log("Ошибка, состояние: " + e.readyState);
  //   }
  // });

  eventSource.addEventListener('translations', (e) => {
    bus.$emit('sse:translation', JSON.parse(e.data));
  }, false);

  // eventSource.addEventListener('message', (e) => {
  //   console.console.log('onmessage', e);
  // });
}

function stop() {
  eventSource.close();
}

export default {
  start,
  stop,
};
