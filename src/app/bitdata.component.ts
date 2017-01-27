import { router } from './app.router';
import { Component, NgZone, OnInit } from '@angular/core';
import {BitcoinService} from './bitcoin.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'bitdata',
  templateUrl: './bitdata.component.html',
  styleUrls: ['./bitdata.component.css'], 
  providers: [BitcoinService] 
})


export class BitDataComponent implements OnInit  
{
   name = 'Angular';
   bitcoindata:any[]; //The array holding the data from the bitcoin api.
   Rand:number; // Represents the rand exchange value from the Echange api.
   Dollar:number; // Represents the $ value of the exchange api. 
 
   
   ngOnInit()
   {

        this.UpdateBitCoinData();

     let newobs = Observable.interval(1000*60*5).map(x => x*1);    
     let newsub = newobs.subscribe((x)=>{
         
          this.UpdateBitCoinData();
          console.log(x);
     });

     
   }


        UpdateBitCoinData()// uses the bitcoin service in order to update the prices
        {
                  this.bitcoinservice.getExchangeRates().subscribe(
       (data) => {
         this.Rand = data.rates.ZAR;// Gets the rand value from the api
         this.Dollar = data.rates.USD;// Gets the dollar value from the api

           //console.log(data);
      });


      this.bitcoinservice.getBitcoinData().subscribe((data) => {
      this.bitcoindata = data;      
     
     for(let dat of this.bitcoindata)
     {
       //dat.price_usd = (13.64)*dat.price_usd;
       dat.price_usd = Math.round((this.Rand/this.Dollar)*dat.price_usd*100)/100;
     }  
    });
     
        }


   constructor(private bitcoinservice:BitcoinService){}
}
