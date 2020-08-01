import React from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';


function App() {
  return (
    <div className="App">

      <header className="Mandir-header">
        <p>
         <h1> Welcome to Ayodhya Ji</h1>
         <h1>Bolo Jai Shri Ram</h1>
        </p>

        <img src={require('./ayodhya759.jpg')}  alt="mandir-pic" />

        <p>
          <h1>
            <b>Lets Make World Record of writing and chanting Jai Shri Ram</b>
          </h1>
        </p>

        <iframe src='https://www.youtube.com/watch?v=lqNpCH-xcG'
        frameborder='0'
        allow='autoplay; encrypted-media'
        title='video'
        />
      </header>
    </div>
  );
}

export default App;

class AyodhyaJi extends React.Component {
  render() {

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId="lqNpCH-xcGE" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

//export default AyodhyaJi;