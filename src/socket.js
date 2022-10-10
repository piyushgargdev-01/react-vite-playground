let instance = null;

class SocketService {
  constructor() {
    if (!instance) {
      console.log("IO conection built");
      instance = this;
    }

    return instance;
  }

  sendData() {
    console.log("Send Data on IO");
  }
}

export default SocketService;
