import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


let stocks: Array<string> = ['AAPL', 'GOOG', 'META', 'AMZN', 'TWTR']
let url: string = 'https://angular2-in-action-api.herokuapp.com'


export interface StockInterface {
    symbol: string;
    lastTradePriceOnly: number;
    change: number;
    changeInPercent: number;
}


@Injectable({
  providedIn: 'root'
})
export class StocksService {

    constructor(private httpClient: HttpClient) { }

    get() {
        return stocks.slice();
    }

    add(stock: string) {
        stocks.push(stock);
        return this.get();
    }

    remove(stock: string) {
        stocks.splice(stocks.indexOf(stock), 1)
        return this.get();
    }

    load(symbols: any) {
        if(symbols) {
            console.log(url+'stocks/snapshot?symbols='+symbols.join());
            return this.httpClient.get<Array<StockInterface>>(
                url + '/stocks/snapshot?symbols=' + symbols.join()
            );
        }
        return null;
    }
}
