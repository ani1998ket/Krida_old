// importing the Krida library
import Krida from "../../src/Krida.js";

// importing custom scene
import MyScene from "./MyScene.js";

// setting up the engine
let canvas = document.getElementById("canvas");
let engine = new Krida.Engine();
engine.setCanvas(canvas);

// sets the current scene
engine.setScene(new MyScene());

engine.start();
