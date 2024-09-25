import { Heading } from "./components/heading";
import { PokemonList } from "./components/pokemon-list";

function App() {
  return (
    <div className="container py-8">
      <Heading />
      <PokemonList />
    </div>
  );
}

export default App;
