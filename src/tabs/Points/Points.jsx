import React, { Component } from 'react';
import { PointsOptions } from 'components/Points/PointsOptions/PointsOptions';
import { Statistics } from 'components/Points/Statistics/Statistics';
import { Notification } from 'components/Points/Notification/Notification';
import { Container, Section } from 'components';

export class Points extends Component {
  state = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  onLeavePoint = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + Number(item),
    }));
  };

  countTotalPoints = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  render() {
    const total = this.countTotalPoints();
    return (
      <div>
        <Section>
          <Container>
            <h2>Points</h2>
            <PointsOptions
              options={Object.keys(this.state)}
              onLeavePoint={this.onLeavePoint}
            />
          </Container>
        </Section>
        <Section>
          <Container>
            {total ? (
              <Statistics total={{ ...this.state, total }} />
            ) : (
              <Notification title="There no points" />
            )}
          </Container>
        </Section>
      </div>
    );
  }
}
