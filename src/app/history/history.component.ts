import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { HistoryService } from '../history.service';
import {MatTableDataSource} from '@angular/material'; 

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','mobileNumber','date','amount','operator.name'];  
  constructor(private historyService : HistoryService){ }
  ngOnInit() {
    this.historyService.getTransactions(1).subscribe(
      data=>{
        let transaction=data;
        console.log(transaction);
        this.dataSource = new MatTableDataSource(transaction);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator; 
      }
    );
  }
}
