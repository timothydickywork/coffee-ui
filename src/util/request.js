import axios from 'axios'
import moment from 'moment'
import store from '../store'

// create an axios instance
const service = axios.create({
  baseURL: 'http://coffee-api.test/api',
  // withCredentials: true,
  timeout: 30000,
})

// request interceptor
service.interceptors.request.use(
  config => {
    store.dispatch('progressbar/showProgressbar', {
      text: 'Brewing your request!',
    })
    config.headers['X-Timestamp'] = moment(new Date()).format('YYYY-MM-DDTHH:mm:ssZ')
    return config
  },
  error => {
    console.log(error)
    store.dispatch('snackbar/showSnackbar', {
      text: 'Error: Request cannot be done!',
      color: 'error',
      timeout: 3500,
    })
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  response => {
    store.dispatch('progressbar/close')
    const res = response.data
    store.dispatch('snackbar/showSnackbar', {
      text: 'Done!',
      color: 'success',
      timeout: 3500,
    })
    return res
  },
  error => {
    store.dispatch('progressbar/close')
    console.log(error.response)
    if (error.response.data.errors) {
      store.dispatch('snackbar/showSnackbar', {
        text: error.response.data.errors,
        color: 'error',
        timeout: 3500,
      })
    } else if (error.response) {
      store.dispatch('snackbar/showSnackbar', {
        text: 'Error: ' + error.response.data.meta.message,
        color: 'error',
        timeout: 3500,
      })
    }

    return Promise.reject(error)
  },
)

export default service
