import React from 'react';
import ReactTable from 'react-table'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: []
    };
    console.log('test')
    this.ws = new WebSocket("ws://127.0.0.1:8888/");
  }

  render() {
    this.ws.onopen = () => {
      console.log('Opened Connection!')
    };

    this.ws.onmessage = (event) => {
      this.setState({ currentData: JSON.parse(event.data) });
    };

    this.ws.onclose = () => {
      console.log('Closed Connection!')
    };

    return (
      <div className="App">
        <ul className="list">
            {this.state.currentData.map((item, index) => (
              <li key={index}>
                {item.name}
                {item.number}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;