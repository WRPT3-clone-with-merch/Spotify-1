// import React, { useState } from 'react';
// import axios from 'axios';
// import './MusicPlayer.css';

// const MusicPlayerComponent = (props) => {

//   const {REACT_APP_ACCESS_TOKEN} = process.env;


//   return (
//     <div>
//       <script src='https://sdk.scdn.co/spotify-player.js'></script>
//       <script>
//         {window.onSpotifyWebPlaybackSDKReady = () => {
//             const token = `${REACT_APP_ACCESS_TOKEN}`;
//             const player = new Spotify.Player({
//                 name: 'Web Playback SDK Quick Start Player',
//                 getOAuthToken: cb => { cb(token); },
//                 volume: 0.5
//             });

//             // Ready
//             player.addListener('ready', ({ device_id }) => {
//                 console.log('Ready with Device ID', device_id);
//             });

//             // Not Ready
//             player.addListener('not_ready', ({ device_id }) => {
//                 console.log('Device ID has gone offline', device_id);
//             });

//             player.addListener('initialization_error', ({ message }) => {
//                 console.error(message);
//             });

//             player.addListener('authentication_error', ({ message }) => {
//                 console.error(message);
//             });

//             player.addListener('account_error', ({ message }) => {
//                 console.error(message);
//             });

//             document.getElementById('togglePlay').onclick = function() {
//               player.togglePlay();
//             };

//             player.connect();
//         }}
//     </script>
//       <button id="togglePlay">Toggle Play</button>
//     </div>
//   )
// }

// export default MusicPlayerComponent;