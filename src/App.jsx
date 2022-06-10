import React from "react";
import "./App.css";

const ThemeContext = React.createContext("light");

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Subscribes this component to ThemeContext
  static contextType = ThemeContext;

  render() {
    return <button>The context is = {this.context}</button>;
  }
}
// Alternative way to subscribe
// ThemedButton.contextType = ThemeContext

export default App;
