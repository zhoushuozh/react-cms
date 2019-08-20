import axios from 'axios'
// import { withRouter } from 'react-router-dom'
import { message } from 'antd'

axios.defaults.timeout = 10000 //超时取消请求
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = `${window.location.origin}/apis`;
} else {
  axios.defaults.baseURL = `http://rap2api.taobao.org/app/mock/228353/api/`;
}

// 请求列表
const requestList = []
// 取消列表
const CancelToken = axios.CancelToken
let sources = {}

axios.interceptors.request.use(
  config => {
    //将请求地址及参数作为一个完整的请求
    const request = JSON.stringify(config.url) + JSON.stringify(config.data)
    config.cancelToken = new CancelToken(cancel => {
      sources[request] = cancel
    })

    //1.判断请求是否已存在请求列表，避免重复请求，将当前请求添加进请求列表数组；
    if (requestList.includes(request)){
      sources[request]('取消重复请求')
    } else {
      requestList.push(request)
      // 2.请求一旦开始，就可以开启动画加载效果。
      // store.dispatch('changeGlobalState', { loading: true })
    }

    //3.从store中获取token并添加到请求头供后端作权限校验, 用户登录后可以在请求头中携带token做权限校验使用。
    /* let localUserCode = getStore('S_C_USER_CODE')
    if (localUserCode) {
      config.headers['localUserCode'] = localUserCode
    } */
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    // 1.将当前请求中请求列表中删除
    const request = JSON.stringify(response.config.url) + JSON.stringify(response.config.data)
    requestList.splice(requestList.findIndex(item => item === request), 1)

    // 2.当请求列表为空时，更改loading状态
    if (requestList.length === 0) {
      // store.dispatch('changeGlobalState', { loading: false })
    }
    // 3.统一处理权限认证错误管理
    if (response.data.code === 1111 || response.data.code === 4444) {
      // localStorage.clear();
      message.error('登录已过期，请重新登录')
      // browserHistory.replaceState(null, '/login');
    } else {
      return response;
    }
  },
  error => {
    // 4.处理取消请求
    if (axios.isCancel(error)){
      requestList.length = 0
      // store.dispatch('changeGlobalState', { loading: false })
      throw new axios.Cancel('cancel request')
    } else {
      // 5.处理网络请求失败
      message.error('网络请求失败')
    }

    return Promise.reject(error);
  }
);

/* const request = function (url, params, config, method) {
  return new Promise((resolve, reject) => {
    axios[method](url, params, Object.assign({}, config)).then(response => {
      resolve(response.data)
    }, err => {
      if (err.Cancel) {
        console.log(err)
      } else {
        reject(err)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

const post = (url, params, config = {}) => {
  return request(url, params, config, 'post')
}

const get = (url, params, config = {}) => {
  return request(url, params, config, 'get')
} */

export { sources, axios }