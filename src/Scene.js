export default class Scene {
  constructor() {
    this.gameObjects = {}
  }

  update(dt) {
    for( let key in this.gameObjects ){
      this.gameObjects[key].update( dt );
    }
  }

  render(ctx) {
    for( let key in this.gameObjects ){
      this.gameObjects[key].render( ctx );
    }
  }

  addGameObject( key, instance ){
    this.gameObjects[key] = instance;
  }

  removeGameObject( key ){
    delete this.gameObjects[key];
  }

  getGameObject( key ){
    if( this.gameObjects[key] == undefined ){
      return null;
    }
    return this.gameObjects[key];
  }
}
