import _jsonp from 'jsonp';

export default function jsonp(url, param){
  return new Promise((resolve, reject) => {
    _jsonp(url, param||{}, function (err, data) {
        console.log(err, data)
        if (data && data.status && data.status === 'success') {
          resolve(data)
        } else {
          reject(err)
        }
      }
    )
  })
}