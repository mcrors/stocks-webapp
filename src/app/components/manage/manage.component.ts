import { Component } from '@angular/core';

import { StocksService } from '../../services/stocks.service'

@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  symbols: Array<string>;
  stock: string = '';

  constructor(private stockService: StocksService) {
      this.symbols = stockService.get();
  }

  add() {
      this.symbols = this.stockService.add(this.stock.toUpperCase());
      this.stock = '';
  }

  remove(symbol: string) {
      this.symbols = this.stockService.remove(symbol);
  }
}
