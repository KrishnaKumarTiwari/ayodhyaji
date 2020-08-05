//import React from 'react';
import logo from './logo.jpg';
import './App.css';
import YouTube from 'react-youtube';
import MicRecorder from 'mic-recorder-to-mp3';
import { Container, Row, Col } from 'reactstrap';

import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';


const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

//const Mp3Recorder = new MicRecorder({ bitRate: 128 });

  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

class AyodhyaJi extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      countstart:15682,
      isBlocked: false,
    };

  }
//
//  start = () => {
//    if (this.state.isBlocked) {
//      console.log('Permission Denied');
//    } else {
//      Mp3Recorder
//        .start()
//        .then(() => {
//          this.setState({ isRecording: true });
//        }).catch((e) => console.error(e));
//    }
//  };
//
//  stop = () => {
//    Mp3Recorder
//      .stop()
//      .getMp3()
//      .then(([buffer, blob]) => {
//        const blobURL = URL.createObjectURL(blob)
//        this.setState({ blobURL, isRecording: false });
//      }).catch((e) => console.log(e));
//  };
//
//  componentDidMount() {
//    navigator.getUserMedia({ audio: true },
//      () => {
//        console.log('Permission Granted');
//        this.setState({ isBlocked: false });
//      },
//      () => {
//        console.log('Permission Denied');
//        this.setState({ isBlocked: true })
//      },
//    );
//  }

  render(){
     return (
       <div className="App">

       <header className="Mandir-header">
         <p>
          <h1> अयोध्या जी में आपका स्वागत है | Welcome to Ayodhya Ji</h1>
         </p>

           <p>

           </p>

           <h2>
           बोलो सिया पति राम चंद्र की जय….!!
           </h2>

         <div id = "services">
                 <YouTube videoId="Oh_06IWPSgk" opts={opts} onReady={this._onReady} />
         </div>


       </header>

       <footer>
          <h4>
            Developed in short notice by Ram Bhakts | Stay Tuned!
          </h4>
       </footer>
     </div>
     );
   }
}

export default AyodhyaJi;