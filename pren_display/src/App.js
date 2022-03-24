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
  let socket = getSocket("http://localhost:8080");

  const init = async() => {
    var response = await fetch("http://localhost:8080/run")
    var result = await response.json();
    console.log("res", result)
    setStatusInfo([result])
    // setTestData([result])
  }

  useEffect(()=>{
    init()
    socket.on('update', (data) => {
      setTestData(arr => [...arr, ...data.data])
    })
  },[])

  const request = () => {
    socket.emit('request')
  }


    return (
      <div className="App">
        <button onClick={request}>Request Data</button>
        <div>
          Robot is currently {statusInfo.filter(x => x.name !== undefined).map(x => {
            return <p key={uuidv4()}>{x.status}</p>
          }) }
        </div>
        <ul className="list">
          {testData.filter(x => x.name !== undefined).map(x => {
            //Display appended data
            return <p key={uuidv4()}>{x.name} | {x.number}</p>
          })}
        </ul>
      </div>
    );
}

export default App;