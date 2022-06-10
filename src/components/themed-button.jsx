import React from "react";
import { ThemeContext } from "../context/theme-context";

function ThemedButton(props) {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return (
          <button {...props} style={{ backgroundColor: theme.background }} />
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default ThemedButton;
