import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="welcome">Lets make some react-ive magic!</h1>

        <section id="lux-footer">
          <div id="avatar"></div>
          <p id="username">Conjured by 
            <a className="animate50" href="http://lux-capacitor.com" target="_blank"> @Lux_Capacitor</a>
          </p>
        </section>

      </div>
    );
  }
}
export default App;