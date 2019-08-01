import React from 'react';
import { getBmap } from '../../utils/map.js'
import { formateDate } from '../../utils/utils.js'
import jsonp from '../../utils/jsonp.js'

export default class Weather extends React.Component {
  state = {}
  getWeahter = (loaction) => {
    let cityName = loaction.replace('市', '')
    let url = 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(cityName) + '&output=json&ak=lcYjK5yQntPA94fXQ0N8y0pMUE2Qj8ia'
    jsonp(url)
      .then(
        res => {
          this.setState({
            weather: res.results
          })
        },
        err => {
          console.log(err)
        }
      )
  }
  componentWillMount() {
    getBmap().then(BMap => {
      let _this = this
      var myCity = new BMap.LocalCity();
      myCity.get(result => {
        _this.setState({
          cityName: result.name
        })
        this.getWeahter(result.name)
      })
      /* var map = new BMap.Map("allmap");
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function (r) {
          if (this.getStatus() === window.BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            _this.setState({
              loaction: r.point.lng + '|' + r.point.lat
            })
          }
        },
        function() { 
          var myCity = new BMap.LocalCity();
          myCity.get(result => {
            _this.setState({
              cityName: result.name,
              loaction: result.name
            })
          })
        }
      )*/
    })
    setInterval(() => {
      let timestamp = new Date().getTime()
      this.setState({
        currentTime: formateDate(timestamp, '-')
      })
    }, 1000)
  }

  render() {
    return (
      <div style={{
        display: 'flex'
      }}>
        <div className="city" style={{marginRight: '10px'}}>{this.state.cityName}</div>
        <div className="time">{this.state.currentTime}</div>
      </div>
    )
  }
}