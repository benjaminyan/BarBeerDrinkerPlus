import { Component, OnInit } from '@angular/core';
import { Bar } from '../model/bar';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.css']
})
export class BarListComponent implements OnInit {
  public barList: Bar[];
  public columns;
  public data;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.columns = [
      {header: 'Name', field: 'name'},
      {header: 'License', field: 'license'},
      {header: 'Address', field: 'addr'},
      {header: 'City', field: 'city'},
      {header: 'State', field: 'state'},
      {header: 'Zip', field: 'zip'},
      {header: 'Phone', field: 'phone'},
    ];

    this.dataService.getBars().subscribe((data: Bar[]) => {
      this.barList = data;
    });
  }

}
