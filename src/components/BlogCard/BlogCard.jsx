export const BlogCard = ({
  name,
  description,
  title,
  poster,
  tag,
  avatar,
  postedAt,
}) => {
  return (
    <div>
      <img src={poster} alt={tag} />
      <h2>{tag}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={avatar} alt={name} />
      <p>{name}</p>
      <p>{postedAt}</p>
    </div>
  );
};
