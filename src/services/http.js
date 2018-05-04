import axios from 'axios';

export default axios.create({
  baseURL: 'http://new.whoer.net/v2/',
  // auth: {
  //   username: 'test123',
  //   password: 'supersecret',
  // },
});
