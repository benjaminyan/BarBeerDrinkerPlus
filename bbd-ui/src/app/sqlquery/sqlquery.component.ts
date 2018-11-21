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
  errorMessage: string;
  constructor(private dataService: DataService) { }

  runClicked() {
    const obs = this.dataService.getResultFromQuery(this.sqlQuery);

    obs.subscribe((data: any) => {
      if (data['error'] == null) {
        this.rows = data['rows'];
        this.columns = data['colNames'].map((colName: string) => {
          return {header: colName, field: colName};
        });
      }
      else {
        this.errorMessage = data['error'];
      }
      console.log(this.rows);
    });
  }
  ngOnInit() {
    
  }

}
