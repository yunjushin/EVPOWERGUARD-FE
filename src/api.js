import axios from 'axios';

const baseConfig = {
  baseURL: window.location.origin.replace(window.location.port, 9000),
};
const GET = async (url, config = {}, sFunc, fFunc) => {
  try {
    const response = await axios.get(url, Object.assign(baseConfig, config));
    if (typeof sFunc === 'function') {
      sFunc(response);
    }
    return response;
  } catch (e) {
    if (typeof fFunc === 'function') {
      fFunc(e);
    }
    return e;
  }
};

const POST = async (url, config, sFunc, fFunc) => {
  try {
    const response = await axios.post(url, config);
    if (typeof sFunc === 'function') {
      sFunc(response);
    }
    return response;
  } catch (e) {
    if (typeof fFunc === 'function') {
      fFunc(e);
    }
    return e;
  }
};
const PUT = async (url, config, sFunc, fFunc) => {
  try {
    const response = await axios.put(url, config);
    if (typeof sFunc === 'function') {
      sFunc(response);
    }
    return response;
  } catch (e) {
    if (typeof fFunc === 'function') {
      fFunc(e);
    }
    return e;
  }
};

const DELETE = async (url, config, sFunc, fFunc) => {
  try {
    const response = await axios.delete(url, config);
    if (typeof sFunc === 'function') {
      sFunc(response);
    }
    return response;
  } catch (e) {
    if (typeof fFunc === 'function') {
      fFunc(e);
    }
    return e;
  }
};

const api = {
  get: GET,
  post: POST,
  put: PUT,
  delete: DELETE,
};
export default api;
