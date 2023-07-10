import Joke from '../joke';

interface ChuckJokeProps {
  jokes: Array<Joke>;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ jokes }) => {
  const filteredJokes = jokes.filter((joke: Joke) => joke.id === 3);
  return (
    <>
      <ul>
        {jokes.map((joke: Joke) => (
          <li key={joke.id}>😆 {joke.joke}</li>
        ))}
      </ul>
      <h2>Filtered Jokes:</h2>
      <p>😂 {filteredJokes[0].joke}</p>
    </>
  );
};

export default ChuckJoke;
