import React from 'react';
import init from './init';


// Main render screen for webGL 
class WebGL extends React.Component {
  componentDidMount() {
    // call rendering initialization and pass in the id of the canvas
    init('webgl');
  }

  render() {
    return (
      <canvas 
        id="webgl" 
        width="800" 
        height="600" 
        style={{ border: '1px solid black' }}
      >
      </canvas>
    );
  };
};

export default WebGL;