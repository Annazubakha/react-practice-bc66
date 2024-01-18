import { BlogCard, Container, Section, Statistics } from 'components';
import article from 'data/article.json';
import statistics from 'data/statistics.json';

const Props = () => {
  return (
    <>
      <Section>
        <Container>
          <BlogCard {...article} />
          <Statistics statistics={statistics} title="Statistics" />
        </Container>
      </Section>
    </>
  );
};

export default Props;
