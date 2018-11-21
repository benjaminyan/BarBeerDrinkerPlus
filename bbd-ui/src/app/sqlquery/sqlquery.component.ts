import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sqlquery',
  templateUrl: './sqlquery.component.html',
  styleUrls: ['./sqlquery.component.css']
})
export class SQLQueryComponent implements OnInit {
  sqlQuery: string;
  columns: [];
  rows: [];
  message: string;
  constructor(private dataService: DataService) { }

  runClicked() {
    const obs = this.dataService.getResultFromQuery(this.sqlQuery);

    obs.subscribe((data: any) => {

      if (data['error'] !== null) {
        this.message = data['error'];
      }
      else if (data['result'] !== null) {
        this.message = data['result'];
      }
      else {
        this.rows = data['rows'];
        this.columns = data['colNames'].map((colName: string) => {
          return {header: colName, field: colName};
        });
      }
      console.log(this.rows);
    });
  }
  ngOnInit() {
    
  }

}
