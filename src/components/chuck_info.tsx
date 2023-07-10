import React from 'react';

interface IChuckInfoProps {
  whalesSaved: number;
  roundhouseKicks: number;
}

const ChuckInfo: React.FC<IChuckInfoProps> = ({
  whalesSaved,
  roundhouseKicks,
}) => (
  <>
    <p>Number of Whales Saved: {whalesSaved}</p>
    <p>Number of Round House Kicks (in the last day): {roundhouseKicks}</p>
  </>
);

export default ChuckInfo;
