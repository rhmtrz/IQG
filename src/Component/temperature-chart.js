import React, { Component } from 'react';
import { XYPlot, LineSeries, VerticalBarSeries, MarkSeries } from 'react-vis';

class Chart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {x: 0, y: 8},
          {x: 1, y: 5},
        ]
      }
      let i =0;
      window.addEventListener("mousemove",({clientX, clientY}) => {
        this.setState({
          data: this.state.data.concat({
            x: i ,
             y : clientY % 10
           })
         })
         i++;
      })
    }
  render() {
    const { data } = this.state;
    return (
      <div className="App">
      <XYPlot height={800} width={1800}>
        <VerticalBarSeries data={data} />
      </XYPlot>
      <XYPlot height={200} width={200}>
        <LineSeries data={data} />
      </XYPlot>
      <XYPlot height={200} width={200}>
        <MarkSeries data={data} />
      </XYPlot>
      </div>
    );
  }
}

export default Chart;
