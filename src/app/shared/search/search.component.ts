import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onValue: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  onAdd(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log(filterValue);
    this.onValue.emit(filterValue);
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   // this.dataSource.filter = filterValue.trim().toLowerCase();
  //   // console.log(filterValue);
  //   this.onValue.emit(filterValue);
  // }


}
