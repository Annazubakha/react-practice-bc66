import { BlogCard } from './BlogCard/BlogCard';
import article from 'data/article.json';

export const App = () => {
  return (
    <>
      <BlogCard {...article} />
    </>
  );
};
