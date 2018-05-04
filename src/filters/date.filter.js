import moment from 'moment';

export default function dateFilter(timestamp) {
  const date = moment(timestamp);
  // eslint-disable-next-line
  return date._isValid ? date.format('DD.MM.YYYY, HH:mm') : timestamp;
}
