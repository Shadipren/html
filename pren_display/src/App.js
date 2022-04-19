import React, { useEffect, useState } from 'react';
import { getSocket } from './components/SocketSingleton';

const App = () => {

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const [testData, setTestData] = useState([]);
  const [statusInfo, setStatusInfo] = useState([]);
  const [events, setEvents] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [voltagePrint, setVoltagePrint] = useState([]);
  const [coils, setCoils] = useState([]);
  const [acceleration, setAcceleration] = useState([]);
  const [voltageMotor, setVoltageMotor] = useState([]);
  //let socket = getSocket("http://localhost:5000");
  //console.log("location.host: "+ location.host)
  let socket = getSocket(window.location.protocol+"//flask-pren.herokuapp.com");

  const init = async() => {
    var response = await fetch("https://flask-pren.herokuapp.com/run")
    //var response = await fetch("http://localhost:5000/run")
    var result = await response.json();
    console.log("res", result)
    setStatusInfo(result)
    // setTestData([result])
  }

  useEffect(()=>{
    init()
    socket.on('update', (data) => {
      data = JSON.parse(data)
      setTestData(arr => [...arr, ...data.data])
    })
    socket.on('event', (data) => {
      console.log('data from event ' + data)
      data = JSON.parse(data)
      setEvents(arr => [...arr, data.data])
    })
    socket.on('speed', (data) => {
      console.log("data",data)
      data = JSON.parse(data)
      console.log("Speed update Data:" + data.data.message)
      setSpeed(data.data.message)
    })
    socket.on('voltage_print', (data) => {
      console.log("voltage_print update Data:" + data.data.message)
      setVoltagePrint(data.data.message)
    })
    socket.on('coils', (data) => {
      console.log("coils update Data:" + data.data.message)
      setCoils(data.data.message)
    })
    socket.on('acceleration', (data) => {
      console.log("accelerations update Data:" + data.data.message)
      setAcceleration(data.data.message)
    })
    socket.on('voltage_motor', (data) => {
      console.log("voltage_motor update Data:" + data.data.message)
      setVoltageMotor(data.data)
    })
    socket.on('statusInfo', (data) => {
      console.log("status info update Data:" + data.data.status)
      setStatusInfo(data.data)
    })
  },[])

  const request = () => {
    socket.emit('request')
  }


    return (
      <div className="App">
        <button onClick={request}>Request Data</button>
        <div>
          <span>Speed: {speed}</span><br/>
          <span>VoltagePrint: {voltagePrint}</span><br/> 
          <span>coils: {coils}</span><br/>
          <span>Acceleration: {acceleration}</span><br/>
          <span>VoltageMotor: {voltageMotor}</span><br/> 
          {/* do something like this for all sensor data */}
        </div>
        <div>
          Robot is currently {() => {
            if (statusInfo.status == "online")
              <h3>ONLINE</h3>
            else
              <h3>OFFLINE</h3>
            } 
          }
        </div>
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