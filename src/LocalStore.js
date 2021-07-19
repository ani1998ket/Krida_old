class LocalStore {
    constructor() {
    }
  
    get(key) {
        let newKey = "Krida_" + key;
        return window.localStorage.getItem( newKey );
    }
  
    set(key, value) {
        // Look into encoding
        let newKey = "Krida_" + key;
        window.localStorage.setItem( newKey, value );
    }

    delete(key){
        let newKey = "Krida_" + key;
        window.localStorage.removeItem( newKey );
    }

    empty(){
        localStorage.clear();
    }
  }
  
  let localstore = new LocalStore();
  
  export default localstore;
  