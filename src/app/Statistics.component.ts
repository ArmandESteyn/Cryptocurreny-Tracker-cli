import { Component,OnInit, } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({

    selector: 'my-stats',
    templateUrl: './Statistics.component.html',
    styleUrls: ['./Statistics.component.css'],
   

})

export class StatisticsComponent
{

    data=[1];
    labels=['1'];
    columnTypes;
    chartType;
    options;
    date = new Date();


createchart()
{
   

    this.columnTypes = [{
        'type': 'string',
        'value': 'subjectName'
    },
    {
        'type': 'number',
        'value': 'Marks'
    }];

    this.chartType = 'Line';

    this.options = {
        'width': 1000,
        'height': 400,
        'bars': 'vertical',
        'chartArea': { 'left': 150, 'bottom': 50, 'right': 100, 'top': 50 },
        backgroundColor: 'yellowgreen',
        
        hAxis: {
            title: 'Time',
           
            
        
        },
        vAxis: {
            title: 'Price',
    
        },
    }

}


     ngOnInit()
     { 
         this.createchart();

         let newobs = Observable.interval(1000*10).map(x => x*1);    
     let newsub = newobs.subscribe((x)=>{
        this.data.push(20);
        this.createchart();
        console.log(x);
     });
        
       
     }
        
    
}