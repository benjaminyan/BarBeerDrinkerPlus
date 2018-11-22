import { Component, OnInit } from '@angular/core';
import { DataService, TransactionBundle } from '../services/data.service';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-drinker',
  templateUrl: './drinker.component.html',
  styleUrls: ['./drinker.component.css']
})
export class DrinkerComponent implements OnInit {
  public drinkerName: string;
  public transactionArr: TransactionBundle[];
  public columns;
  public dataObs: Observable<any>;
  public data: any;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.columns = [
      {header: 'tid', field: 'tid', width: '20'},
      {header: 'Bar Name', field: 'bar', width: '20'},
      {header: 'Amount Paid', field: 'amountPaid', width: '15'},
      {header: 'Date', field: 'dateTime', width: '13'},
      {header: 'Tip', field: 'tip', width: '10'}
    ];

    this.dataObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.drinkerName = params.get('name');
        return this.dataService.getTransactionsForDrinker(params.get('name'));
      }
      ));
    this.dataObs.subscribe((data: any) => {
      let i = 0;
      let j = 0;
      this.transactionArr = [];
      for (i = 0; i < data.length; i++) {
        let newTransaction: TransactionBundle;
        newTransaction = new TransactionBundle(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4]);
        this.transactionArr.push(newTransaction);
      }
      console.log(this.transactionArr);
    });
  }

}
