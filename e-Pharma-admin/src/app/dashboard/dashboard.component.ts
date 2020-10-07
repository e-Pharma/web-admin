import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DashboardService } from '../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalOrders:any = 0;
  completedOrders:any = 0;
  rejectedOrders:any = 0;
  pendingOrders:any = 0;
  totalClients:any = 0;

  constructor(private DashboardService:DashboardService) { 
    this.readTotalOrders();
    this.readCompletedOrders();
    this.readRejectedOrders();
    this.readTotalClients();
    this.pendingOrders = this.totalOrders - this.completedOrders - this.rejectedOrders;
  }

  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };

  ngOnInit() {
      /* ----------==========     Daily Orders Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------====================    Performance Chart    ====================---------- */
      var datawebsiteViewsChart = {
        labels: ['Completed', 'Rejected', 'Pending'],
        series: [2, 7, 20]
      };
      var optionswebsiteViewsChart = {
        labelInterpolationFnc: function(value) {
          return value[0]
        }
      };

      var responsiveOptions: any[] = [
        ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 35,
    chartPadding: 18
  }]
      ];

      var websiteViewsChart = new Chartist.Pie('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }

  //#########################################################  EPHARMA  ##################################################################
  readTotalOrders(){
    this.DashboardService.getTotalOrdersCount().subscribe(data=>{
      console.log(data);
      this.totalOrders = data;
    })
  }

  readCompletedOrders(){
    this.DashboardService.getCompletedOrdersCount().subscribe(data=>{
      console.log(data);
      this.completedOrders = data;
    })
  }

  readRejectedOrders(){
    this.DashboardService.getRejectedOrdersCount().subscribe(data=>{
      console.log(data);
      this.rejectedOrders = data;
    })
  }

  readTotalClients(){
    this.DashboardService.getTotalClientsCount().subscribe(data=>{
      console.log(data);
      this.totalClients = data;
    })
  }

}
