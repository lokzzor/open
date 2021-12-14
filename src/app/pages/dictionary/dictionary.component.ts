import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

const ELEMENT_DATA: PeriodicElement[] = [
  {storage_name: "stor1",software_version: "20.12.0"},
  {storage_name: "stor2",software_version: "20.12.0"},
  {storage_name: "stor3",software_version: "20.12.0"},
  {storage_name: "stor4",software_version: "20.12.0"},
];
@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  fil: any = { storage: "",software: "",};
  displayedColumns: string[] = ['storage_name'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  storage_name: string;
  software_version: string;
}