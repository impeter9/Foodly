import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import CustomNavbar from './components/CustomNavbar.jsx';
import MainImageCarousels from './components/MainImageCarousels.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <CustomNavbar />
      {/* <List items={this.state.items}/> */}
      <MainImageCarousels />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));