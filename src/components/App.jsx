import { BlogCard } from './BlogCard/BlogCard';
import { Statistics } from './Statistics/Statistics';
import article from 'data/article.json';
import statistics from 'data/statistics.json';

export const App = () => {
  return (
    <>
      <BlogCard {...article} />
      <Statistics statistics={statistics} title="Statistics" />
    </>
  );
};
