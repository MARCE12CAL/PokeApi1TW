export function PokemonCard(props: { name: string; url: string }) {
  const { name, url } = props;

  const pokemonId = url.slice(0, -1).split("/").pop();

  return (
    <div className="card border bg-base-100 col-span-4 shadow-xl">
      <figure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          alt={name}
          className="size-[200px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        <p>Pokedex ID: {pokemonId}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ver Pokemon</button>
        </div>
      </div>
    </div>
  );
}
