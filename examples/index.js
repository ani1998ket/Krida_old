import Engine from "../src/index.js"
import MyScene from "./MyScene.js"

let canvas = document.getElementById("canvas")
let engine = new Engine()
engine.setCanvas( canvas )
engine.setScene( new MyScene() )
engine.start()