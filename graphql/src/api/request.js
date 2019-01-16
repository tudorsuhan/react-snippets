import axios from 'axios';

const request = () => {
  return axios({
    url: 'https://windows.softwsp.com/wp-json/wp/v2/posts?per_page=30',
    method: 'GET',
  });
};

export default request;
