import { formateDateToNow } from 'helpers/formateDate';
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardPoster,
  CardText,
  CardTitle,
  Date,
  Tag,
  UserBox,
  UserName,
} from './BlogCard.styled';

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
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <div>
            <UserName>{name}</UserName>
            <Date>{formateDateToNow(postedAt)}</Date>
          </div>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
