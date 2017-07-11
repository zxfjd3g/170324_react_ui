import React from 'react'
import {Button, DatePicker} from 'antd'

import './App.css'

export default class App extends React.Component {

  handleClick = () => {
    alert('-----')
  }

  render () {
    return (
      <div className="App">
        <Button type="dashed" onClick={this.handleClick}>Button</Button>
        <DatePicker />
      </div>
    )
  }
}

