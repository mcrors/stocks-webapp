import { Component, Input } from '@angular/core';
import { StockInterface } from '../../services/stocks.service'

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
    @Input() stock?: StockInterface;

    isNegative() {
        return (this.stock && this.stock.change < 0);
    }

    isPositive() {
        return (this.stock && this.stock.change > 0);
    }
}
