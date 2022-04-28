import React, { useEffect, useState } from 'react';
import { getSocket } from './components/SocketSingleton';
import { Slider } from '@material-ui/core';

const App = () => {

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const [testData, setTestData] = useState([]);
  // const [statusInfo, setStatusInfo] = useState("");
  const [events, setEvents] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [voltagePrint, setVoltagePrint] = useState([]);
  const [coils, setCoils] = useState([]);
  const [acceleration, setAcceleration] = useState([]);
  const [voltageMotor, setVoltageMotor] = useState([]);
  const [sliderVal, setSliderVal] = React.useState(50);
  
  let endpoint = 'http://localhost:5000'
  console.log('env: '+process.env.NODE_ENV)
  if(process.env.NODE_ENV != 'development'){
    endpoint = window.location.protocol+"//flask-pren.herokuapp.com"
  }
  const socket = getSocket(endpoint);

  const init = async() => {  
    var response = await fetch(endpoint+"/run")
    var result = await response.json();
    console.log("init result", result)
    // setStatusInfo(result.status)
  }

  useEffect(()=>{
    init()
    socket.on('update', (data) => {
      data = JSON.parse(data)
      setTestData(arr => [...arr, ...data.data])
    })
    socket.on('event', (data) => {
      // console.log('data from event: ',data)
      data = JSON.parse(data)
      // console.log('parsed event : ',data.data)
      setEvents(arr => [...arr, data.data])
    })
    socket.on('speed', (data) => {
      // console.log("speed data", data)
      data = JSON.parse(data)
      setSpeed(data.data.message)
    })
    socket.on('voltage_print', (data) => {
      // console.log("voltage_print update Data: ", data)
      data = JSON.parse(data)
      setVoltagePrint(data.data.message)
    })
    socket.on('coils', (data) => {
      // console.log("coils update Data: ", data)
      data = JSON.parse(data)
      setCoils(data.data.message)
    })
    socket.on('acceleration', (data) => {
      // console.log("accelerations update Data: ", data)
      data = JSON.parse(data)
      setAcceleration(data.data.message)
    })
    socket.on('voltage_motor', (data) => {
      // console.log("voltage_motor update Data: ", data)
      data = JSON.parse(data)
      setVoltageMotor(data.data.message)
    })
    // socket.on('statusInfo', (data) => {
    //   console.log("status info update Data: ", data.data.status)
    //   data = JSON.parse(data)
    //   setStatusInfo(data.data.message)
    //   statusDisplay(data.data.message)
    // })
  },[])

  const request = () => {
    socket.emit('request_test_data')
  }

  const change_speed = (event, newValue) => {
    setSliderVal(newValue)
    console.log('speed changed by slider: '+sliderVal)
    socket.emit('change_speed', sliderVal)
  }

  //  const statusDisplay = (status) =>{
  //     console.log('statusInfo: '+statusInfo)
  //     if (status == "online")
  //       setStatusInfo ONLINE
  //     else
  //       <h3>OFFLINE</h3>
  //  }


    return (
      <div className="App">
        <button onClick={request}>Request Data</button>
        <Slider aria-label="Speed Regulator" min={0} max={100} value={sliderVal} onChange={change_speed} />
        <div>
          <span>Speed: {speed}</span><br/>
          <span>VoltagePrint: {voltagePrint}</span><br/> 
          <span>
            Coils:
            <ul className="list">
              {coils.filter(x => x.nr_coil !== undefined).map(x => {
                return <p key={uuidv4()}>{x.nr_coil} | {x.value}</p>
              })}
            </ul>
          </span>
          <span>
            Acceleration:
            <ul className="list">
              {acceleration.filter(x => x.axis !== undefined).map(x => {
                return <p key={uuidv4()}>{x.axis} | {x.value}</p>
              })}
            </ul>
          </span>
          <span>VoltageMotor: {voltageMotor}</span><br/> 
        </div>
        {/* <div>
          Robot is currently <h3>{statusDisplay}</h3>
        </div> */}
        <ul className="list">
          {testData.filter(x => x.name !== undefined).map(x => {
            //Display appended data
            return <p key={uuidv4()}>{x.name} | {x.number}</p>
          })}
        </ul>
        <ul className="list">
          {events.filter(x => x.name !== undefined).map(x => {
            //Display appended data
            return <p key={uuidv4()}>{x.name} | {x.message}</p>
          })}
        </ul>
      </div>
    );
}

export default App;