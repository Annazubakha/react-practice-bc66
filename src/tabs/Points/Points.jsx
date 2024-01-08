import { PointsOptions } from 'components/Points/PointsOptions/PointsOptions';
import React, { Component } from 'react';

export class Points extends Component {
  state = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  render() {
    return (
      <div>
        Points
        <PointsOptions options={Object.keys(this.state)} />
      </div>
    );
  }
}
