import GLC from '../glCommander';
import ModelRenderer from '../render/modelRenderer';
import ModelType from '../models/modelType';
import ModelInstance from '../models/modelInstance';

let clear_color = { r: 1.0, g: 1.0, b: 1.0, a: 1.0 };



// main init function passed to webGL.js for rendering
export default (id) => {
  // reference to canvas object in webGL.js
  const canvas = document.querySelector(`#${id}`);

  if (!canvas) {
    return; // canvas does not exist
  }

  const gl = canvas.getContext('webgl'); // get the canvas context and store

  if (!gl) {
    return; // if null canvas context does not exist
  }

  GLC.init(gl); // call glCommander and pass in context

  const vertices = [
    0.0, 0.5, 0.0,
    -0.5, -0.5, 0.0,
    0.5, -0.5, 0.0
  ]

  const indices = [0,1,2];

  const modelRenderer = new ModelRenderer();
  modelRenderer.registerNewModel(new ModelType(vertices, indices), 'triangle');
  const instance = new ModelInstance(0, 0, 0, 0, 0, 0, 1.0);
  modelRenderer.addInstance(instance, 'triangle');


  const render = () => {
    GLC.clear(clear_color.r, clear_color.g, clear_color.b, clear_color.a);
    instance.updateRotation(1, 1, 1); // one degree per frame
    modelRenderer.render();
    window.requestAnimationFrame(render);
  }

  window.requestAnimationFrame(render);
};