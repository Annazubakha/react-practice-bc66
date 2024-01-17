import { useState } from 'react';
import { PointsOptions } from 'components/Points/PointsOptions/PointsOptions';
import { Statistics } from 'components/Points/Statistics/Statistics';
import { Notification } from 'components/Points/Notification/Notification';
import { Container, Section } from 'components';

export const Points = () => {
  const [points, setPoints] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const onLeavePoint = item => {
    setPoints(prevState => ({
      ...prevState,
      [item]: prevState[item] + Number(item),
    }));
  };

  const countTotalPoints = () => {
    return Object.values(points).reduce((acc, value) => acc + value, 0);
  };

  const total = countTotalPoints();
  return (
    <div>
      <Section>
        <Container>
          <h2>Points</h2>
          <PointsOptions
            options={Object.keys(points)}
            onLeavePoint={onLeavePoint}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          {total ? (
            <Statistics total={{ ...points, total }} />
          ) : (
            <Notification title="There no points" />
          )}
        </Container>
      </Section>
    </div>
  );
};
