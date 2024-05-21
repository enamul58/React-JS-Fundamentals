class Context {
  constructor(value) {
    this.value = value;
    console.log("cons " + value);
  }

  //provider
  Provider = ({ children, value }) => {
    this.value = value;
    console.log("prov" + value);
    return children;
  };

  //consumer
  Consumer = ({ children }) => children(this.value);
}

function createContext(value) {
  const context = new Context(value);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
}

export default createContext;
