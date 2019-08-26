import { createTransformationMatrix } from '../../utils/maths';

export default class ModelInstance {
  constructor(x, y, z, rx, ry, rz, scale) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
    this.rz = rz;
    this.scale = scale;
  }

  updateRotation = (rx, ry, rz) => {
    this.rx += rx;
    this.ry += ry;
    this.rx += rz;
    this.updateTransformationMatrix()
  }

  updateTransformationMatrix = () => {
    this.tranformationMatrix = 
      createTransformationMatrix(
        this.x,
        this.y,
        this.z,
        this.rx,
        this.ry,
        this.rz,
        this.scale
      );
  }

  getTransformationMatrix = () => this.tranformationMatrix;
}