import GLC from '../../glCommander';
import vertexSource from './vertex';
import fragmentSource from './fragment';
import locations from './locations';

class ModelShader {
  constructor() {

    // compile and link all of the shader files together

    // vertex shader
    const vertexShader = GLC.createVertexShader();
    GLC.addShaderSource(vertexShader, vertexSource);
    GLC.compileShader(vertexShader);

    // fragement shader
    const fragmentShader = GLC.createFragmentShader();
    GLC.addShaderSource(fragmentShader, fragmentSource);
    GLC.compileShader(fragmentShader);

    const program = GLC.createShaderProgram();
    GLC.attachShaderProgram(program, vertexShader);
    GLC.attachShaderProgram(program, fragmentShader);
    GLC.linkProgram(program);

    this.positionAttribute = GLC.getAttribLocation(program, locations.POSITION); // extract location of position
    this.transformationMatrix = GLC.getUniformLocation(program, 'transformationMatrix'); // upload to graphics card
    this.program = program;
  }

  use = () => {
    GLC.useProgram(this.program);
  }

  enablePosition = () => {
    GLC.enableVertexAttribArray(this.positionAttribute);
    GLC.pointToAttribute(this.positionAttribute, 3);
  }

  enableTransformationMatrix = (matrix) => {
    GLC.uploadMatrix4fv(this.transformationMatrix, matrix);
  }
};

export default ModelShader;