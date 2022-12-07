import React from "react";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header () {
    const history = useHistory();
    console.log(history)


    function handleNavigate() {
      history.push('/posts')
    }

    return (
        <ThemeContext.Consumer>
          {({handleToggleTheme, theme : selectedTheme }) => (
            <Container>
              <h1>React's Blog</h1>
              <button 
                type="button"
                onClick={handleToggleTheme}
                >
                {selectedTheme  === "dark" ? "🌞" : "🌑"}
              </button>
              <button onClick={handleNavigate}>Navegar</button>
           </Container>
          )}
        </ThemeContext.Consumer>
    );
  }


