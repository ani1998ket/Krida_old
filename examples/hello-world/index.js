//importing the Krida library
import Krida from "../../src/Krida.js"

//importing custom scene
import MyScene from "./MyScene.js"

let canvas = document.getElementById("canvas")
let engine = new Krida.Engine()
engine.setCanvas( canvas )

engine.setScene( new MyScene() )

engine.start()