import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions= {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Sales by month',
          align: 'left'
      },
      xAxis: {
          categories: ['April', 'March', 'February', 'January'],
          title: {
              text: null
          },
          gridLineWidth: 1,
          lineWidth: 0
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Sales (dollars)',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          },
          gridLineWidth: 0
      },
      tooltip: {
          valueSuffix: '$'
      },
      plotOptions: {
          bar: {
              borderRadius: '50%',
              dataLabels: {
                  enabled: true
              },
              groupPadding: 0.1
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor: '#FFFFFF',
          shadow: true
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Kids',
          data: [631, 727, 3202, 721]
      }, {
          name: 'Womens',
          data: [814, 841, 3714, 726]
      }, {
          name: 'Mens',
          data: [1276, 1007, 4561, 746]
      }]
    }
  }

}

