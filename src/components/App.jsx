import { BlogCard } from './BlogCard/BlogCard';
import { Section } from './Section/Section.styled';
import { Statistics } from './Statistics/Statistics';
import article from 'data/article.json';
import statistics from 'data/statistics.json';

export const App = () => {
  return (
    <>
      <Section>
        <BlogCard {...article} />
      </Section>
      <Statistics statistics={statistics} title="Statistics" />
    </>
  );
};
