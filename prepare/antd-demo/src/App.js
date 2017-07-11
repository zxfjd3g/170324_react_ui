import React from 'react'
import { DatePicker, message } from 'antd'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toString(),
    }
  }

  handleChange = (date) => {
    message.info('您选择的日期是: ' + date.toString())
    this.setState({ date })
  }


  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={this.handleChange} />
        <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
      </div>
    )
  }
}

export default App
