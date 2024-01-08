export const PointsOptions = ({ options }) => {
  return (
    <ul>
      {options.map(item => (
        <li key={item}>
          <button type="button">{item}</button>
        </li>
      ))}
    </ul>
  );
};
