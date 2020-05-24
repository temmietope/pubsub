class PubSub {
  constructor() {
    this.subscribers = {};
  }

  publish(eventName, data) {
    if (!this.subscribers[eventName]) {
      return;
    }
    this.subscribers[eventName].forEach((callBack) => {
      callBack(data);
    });
  }

  subscribe(eventName, callBack) {
    if (!Array.isArray(this.subscribers[eventName])) {
      this.subscribers[eventName] = [];
    }
    this.subscribers[eventName].push(callBack);
  }

  unsubscribe(eventName, callBack) {
    if (!this.subscribers[eventName]) {
      return;
    }
    let index = this.subscribers[eventName].indexOf(callBack);
    this.subscribers[eventName].splice(index, 1);
  }
}
