import React, { Component } from 'react';
import {
  XYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  DiscreteColorLegend,
  XAxis,YAxis,
  LineMarkSeries } from 'react-vis';

class Chart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [["Jan",2.3],
          ["Feb",10],
          ["Mar",20],
          ["Apr",30],
          ["May",40],
          ["Jun",35]]
      }

      let i =0;
      window.addEventListener("onclick", ({clientX, clientY}) => {
        this.setState({
          data: this.state.data.map(i =>
            data.map(d => ({x: d[0], y: d[i]})
            ))
         })
         i++;
      })
    }


//  const series = [1].map(i =>
//    data.map(d => ({x: d[0], y: d[i]})
//    ));


  render() {
    const { data } = this.state;
    const axisProps = {
      tickSizeInner: 0,
      style: {line: {stroke: '#939393', strokeWidth: '1px'}}
    };

    return (<div>
      <h2 className='tk-adobe-caslon-pro'>Temperature</h2>
      <DiscreteColorLegend items={['°C Kabul', '°C Tokyo']} orientation='horizontal'/>
      <XYPlot width={700} height={300}
           yDomain={[-50, 50]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis {...axisProps} tickFormat={String} />
          <YAxis {...axisProps} tickFormat={(d) => d + '°C'}/>

          {series.map((d, i) => <LineMarkSeries key={i} size={3} data={d} />)}
    </XYPlot></div>);
  }
}

export default Chart;
