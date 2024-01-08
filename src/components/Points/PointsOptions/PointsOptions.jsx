import { List } from './PointsOptions.styled';

export const PointsOptions = ({ options, onLeavePoint }) => {
  return (
    <List>
      {options.map(item => (
        <li key={item}>
          <button type="button" onClick={() => onLeavePoint(item)}>
            {item}
          </button>
        </li>
      ))}
    </List>
  );
};
