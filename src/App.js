import React, { Component } from 'react';
import Kitchenlist from './component/kitchenlist';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        data:[
            {
              "name": "Jumbo Chicken Wrap",
              "Produced":17,
              "Predicted":123,
              "quntity":1
            },
            {
              "name": "Vegetarian Lasagne",
              "Produced":38,
              "Predicted":456,
              "quntity":2
            },
            {
              "name": "Chicken Rice Feast",
              "Produced":21,
              "Predicted":1230,
              "quntity":3
            },
            {
              "name": "Grilled Chicken Breast",
              "Produced":67,
              "Predicted":1435,
              "quntity":2
            }
          ]
      }
  }
  onClick(id){
    console.log(id)
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kitchen Display</h1>
        </header>
        <Kitchenlist click = {this.onClick} each = {this.state.data}/>
      </div>
    );
  }
}

export default App;
