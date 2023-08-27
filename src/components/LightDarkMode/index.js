// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isBackground: true}

  onBgCullerChange = () => {
    this.setState(prevState => ({isBackground: !prevState.isBackground}))
  }

  render() {
    const {isBackground} = this.state
    const modeClassName = isBackground ? 'darkMode' : 'lightMode'
    const buttonText = isBackground ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bgContainer">
        <div className={`cardContainer ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.onBgCullerChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
