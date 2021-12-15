import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

const ELEMENT_DATA: PeriodicElement[] = [
  {storage_name: "data1", file_path: '/tmp/file1', event_number: 111, software_version: 19.1, period_number: 7, run_number: 5000, beam: "Kr", target:"Al", energy:"2.2", track_number: 20},
  {storage_name: "data2", file_path: '/tmp/file1', event_number: 111, software_version: 19.1, period_number: 7, run_number: 5000, beam: "Kr", target:"Al", energy:"2.2", track_number: 20},
  {storage_name: "data1", file_path: '/tmp/file1', event_number: 111, software_version: 19.1, period_number: 7, run_number: 5000, beam: "Kr", target:"Al", energy:"2.2", track_number: 20},
  {storage_name: "data1", file_path: '/tmp/file2', event_number: 111, software_version: 19.1, period_number: 7, run_number: 5000, beam: "Kr", target:"Al", energy:"2.2", track_number: 20},
  {storage_name: "data3", file_path: '/tmp/file1', event_number: 111, software_version: 19.1, period_number: 7, run_number: 5000, beam: "Kr", target:"Al", energy:"2.2", track_number: 20},
  {storage_name: "data1", file_path: '/tmp/file1', event_number: 111, software_version: 19.1, period_number: 7, run_number: 5000, beam: "Kr", target:"Al", energy:"2.2", track_number: 20},
  {storage_name: "data1", file_path: '/tmp/file1', event_number: 111, software_version: 19.1, period_number: 7, run_number: 5000, beam: "Kr", target:"Al", energy:"2.2", track_number: 20},
  {storage_name: "data4", file_path: '/tmp/file4', event_number: 111, software_version: 19.1, period_number: 7, run_number: 5000, beam: "Kr", target:"Al", energy:"2.2", track_number: 20},
  {storage_name: "data1", file_path: '/tmp/file1', event_number: 111, software_version: 19.1, period_number: 7, run_number: 5000, beam: "Kr", target:"Al", energy:"2.2", track_number: 20},
  {storage_name: "data1", file_path: '/tmp/file1', event_number: 111, software_version: 19.1, period_number: 7, run_number: 5000, beam: "Kr", target:"Al", energy:"2.2", track_number: 20},
  {storage_name: "data1", file_path: '/tmp/file1', event_number: 111, software_version: 19.1, period_number: 7, run_number: 5000, beam: "Kr", target:"Al", energy:"2.2", track_number: 20},
];

@Component({
  selector: 'app-bmn',
  templateUrl: './bmn.component.html'
})
export class BmnComponent implements OnInit {
  displayedColumns: string[] = ['storage_name', 'file_path', 'event_number', 'software_version', 'period_number', 'run_number','beam','target','energy', 'track_number'];
  dataSource = ELEMENT_DATA;
  length: any; errors: any = ''; errors2: any = 'Event Selector';
  fil: any = { period_number: "", run_number: "", software_version: "", beam: "", target:"",energy:"",total:""};
  panelOpenState: boolean = false;
  beam:any = ["d","C","Kr","Ar"];
  target:any = ["SRC Lead 3","Sn","Pb","Cu","C","C2H4","SRC Lead 2","SRC Lead 1","no target"];
  soft:any = ["19.1","19","18","16","12"];
  dataper:any=[7,6,5,4,3,2,1]
  constructor() { this.next() }
  ngOnInit(): void {}
  next(){

  }
  filter(){
    let a="",a1="",a2="",a3="",a4="",a5="",a6;let tot;

    if(this.fil.period_number!=""){a=" Period Number "+this.fil.period_number+"; \u00A0";}else{a="";}
    if(this.fil.run_number!=""){a1=" Run Number "+this.fil.run_number+"; \u00A0";}else{a1="";}
    if(this.fil.software_version!=""){a2=" Software Version "+this.fil.software_version+"; \u00A0";}else{a2="";}
    if(this.fil.beam!=""){a3=" Beam Particle "+this.fil.beam+"; \u00A0";}else{a3="";}
    if(this.fil.target!=""){a4=" Target Particle "+this.fil.target+"; \u00A0";}else{a4="";}
    if(this.fil.energy!=""){a5=" Energy "+this.fil.energy+" GeV; \u00A0";}else{a5="";}
    if(this.fil.total!=""){a6=" Total "+this.fil.total+"; \u00A0";}else{a6="";}
    this.errors2=a+a1+a2+a3+a4+a5+a6;
    this.errors ="Event Selector :  \u00A0  \u00A0";
  }
  reset(){
    this.fil = { period_number: "", run_number: "", software_version: "", beam: "", target:"",energy:"",total:""};
    this.errors2 = ''; this.errors = 'Event Selector';  this.next();
  }
  @HostListener('scroll', ['$event'])
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) { if (event.keyCode === 13) { this.filter(); } }
  togglePanel() { this.panelOpenState = !this.panelOpenState; }
  onnClick() { let x = document.querySelector("#foobar"); if (x) { x.scrollIntoView(); } }
}
export interface PeriodicElement {
  storage_name: string;
  file_path: string;
  event_number: number;
  software_version: number;
  period_number: number;
  run_number: number;
  track_number: number;
  beam:string;
  target:string;
  energy:string;
}