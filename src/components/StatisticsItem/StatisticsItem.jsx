export const StatisticsItem = ({ title, total }) => {
  return (
    <li>
      <p>{title}</p>
      <p>{total}</p>
    </li>
  );
};
