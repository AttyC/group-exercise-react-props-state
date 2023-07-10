// 💡 You can import assets like images directly and use them in your components:
import ChuckImage from '../assets/chuck_norris.jpg';

interface IChuckCardProps {
  greeting: string;
}

const ChuckCard: React.FC<IChuckCardProps> = ({ greeting }) => {
  return (
    <>
      <h2>{greeting}</h2>
      <img src={ChuckImage} alt='A handsome man' />
    </>
  );
};

export default ChuckCard;
