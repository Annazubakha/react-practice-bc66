import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export const Statistics = ({ statistics, title }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>
        {statistics.map(element => (
          <StatisticsItem key={element.id} {...element} />
        ))}
      </ul>
    </div>
  );
};
