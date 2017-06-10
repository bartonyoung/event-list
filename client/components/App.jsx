var React = require('react');
var ReactDOM = require('react-dom');
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super()

    this.fetchEvents = this.fetchEvents.bind(this)
  }

  fetchEvents () {
    axios.get('https://testproject-api.strv.com/events')
      .then(results => console.log('data', results))
  } 

  render () {
    return (
      <div>
        <div>hello from Event List</div>
        <button onClick={ ()=> {this.fetchEvents()} }>EVENTS</button>
      </div>  
    )
  }
}

export default App;