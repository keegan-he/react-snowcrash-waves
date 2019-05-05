import React, { Component } from "react"
import Wave from 'react-wavify'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bigwrapper">
        <div className="hello">
          <div className="bod">
            <div className="text">
              snow crash
              <div className="a book">
                a book
                </div>
              <div className="a book">
                by neal stevenson
                </div>
            </div>
            <div className="header2">
              <Wave fill='#f79902'
                paused={false}
                options={{
                  height: 70,
                  amplitude: 30,
                  speed: .5,
                  points: 7
                }}
              />
              <div className="header3">
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
