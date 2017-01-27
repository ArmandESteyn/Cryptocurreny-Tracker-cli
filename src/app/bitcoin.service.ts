import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import "rxjs/Rx";




@Injectable()
   
export class BitcoinService
{
    constructor(private http: Http){}


    getBitcoinData()
    {
            return this.http.get("https://api.coinmarketcap.com/v1/ticker/?limit=2").map((res) => res.json());
    }

    getExchangeRates()
    {
       return this.http.get("http://api.fixer.io/latest").map((res) => res.json());
    }


  

}