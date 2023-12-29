import { Card, CardBody, CardPoster, CardTitle, Tag } from './BlogCard.styled';

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
    <Card>
      <CardPoster src={poster} alt={tag} />
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
      </CardBody>

      <img src={avatar} alt={name} />
      <p>{name}</p>
      <p>{postedAt}</p>
    </Card>
  );
};
