import { Menu, Game, GameContainer } from "./components";
import { GameProvider } from "./contexts/GameContext";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <GameProvider>
      <GlobalStyle />
      <GameContainer>
        <Game />
        <Menu />
      </GameContainer>
    </GameProvider>
  );
}

export default App;
