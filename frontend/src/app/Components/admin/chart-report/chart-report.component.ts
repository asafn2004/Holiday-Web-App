import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-chart-report',
  templateUrl: './chart-report.component.html',
  styleUrls: ['./chart-report.component.css']
})
export class ChartReportComponent implements OnInit{
  
  followersCountMap: { label: string, y: number }[] = []; 
  chart: any;
  csvContent: string = '';

	
  chartOptions = {
    title: {
      text: "Vacations By Likes"
    },
    animationEnabled: true,
    axisX: {
      includeZero: true,
      reversed: true, 
      title: "Destination",
    },
    axisY: {
      minimum: 0,
      interval: 1,
      title: "Likes",
    },
    data: [{
      type: "column", 
      indexLabel: "{y}",
      yValueFormatString: "##",
      dataPoints:  this.followersCountMap
    }],
    backgroundColor: "rgb(236,239,244)",
    colorSet: "colorSet3"
  }  

constructor(private http:HttpClient){}

renderChart(): void {
  this.chart = new CanvasJS.Chart("chartIdSty", this.chartOptions);
  this.chart.render();
}



  ngOnInit(): void {

        this.http.get<any[]>("http://localhost:5000/api/v1/admin/holidays/getNumFollowers")
          .subscribe(data=>{
        data.map(holiday=>{
          this.followersCountMap.push({label: holiday.destination, y: holiday.followers});
          
        });
        
        this.chartOptions.data[0].dataPoints = this.followersCountMap;
        this.renderChart();
       
    });
 
    
  }
  


  exportToCSV() {

    if (this.followersCountMap.length > 0) {
      const csvContent = 'Destination, Followers\n'
       + this.followersCountMap.map(row => `${row.label}, ${row.y}`).join('\n');
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = url;
      link.download = 'followersByHolidays.csv';
      link.click();
  
      URL.revokeObjectURL(url);
    }
  }



}


