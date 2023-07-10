import Joke from '../joke';

interface ChuckJokeProps {
  jokes: Array<Joke>;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ jokes }) => (
  <ul>
    {jokes.map((joke: Joke) => (
      <li key={joke.id}>😆 {joke.joke}</li>
    ))}
  </ul>
);

export default ChuckJoke;
