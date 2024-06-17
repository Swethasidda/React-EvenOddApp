// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, text: 'Even'}

  onIncrement = () => {
    const random1 = Math.ceil(Math.random() * 100)
    let {count} = this.state
    count += random1
    if (count % 2 === 0) {
      this.setState(() => ({count, text: 'Even'}))
    } else {
      this.setState(() => ({count, text: 'Odd'}))
    }
  }

  render() {
    const {count, text} = this.state
    return (
      <div className="big-container">
        <div className="small-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {text}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para1">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
