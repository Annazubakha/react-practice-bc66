import { List } from "./Statistics.styled";

export const Statistics = ({ total }) => {
  return (
    <List>
      {Object.entries(total).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
    </List>
  );
};
