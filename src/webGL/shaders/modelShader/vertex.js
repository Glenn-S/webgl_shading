import locations from './locations';

// pass value from the CPU to the GPU
export default `
  precision mediump float;
  attribute vec3 ${locations.POSITION};
  varying vec3 color;
  uniform mat4 transformationMatrix;

  void main(void) {
    color = ${locations.POSITION};
    gl_Position = transformationMatrix * vec4(${locations.POSITION}, 1.0);
  }
`;