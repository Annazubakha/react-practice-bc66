import { BlogCard, Container, Section, Statistics } from 'components'
import article from 'data/article.json';
import statistics from 'data/statistics.json';

export const App = () => {
  return (
    <>
      <Section>
       <Container><BlogCard {...article} /></Container> 
      </Section>
      <Statistics statistics={statistics} title="Statistics" />
    </>
  );
};
