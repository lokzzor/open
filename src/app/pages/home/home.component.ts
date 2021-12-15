import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  per=false;
  chartArray:any[] = []; chartcolor: any; persellect = []; test:any; fil: any = { per: 7 };
  ctx: any; bname: any = []; anytarget = ["Pb", "SRC Lead 1", "SRC Lead 2", "SRC Lead 3"];
  showFirst: any;
  data: any = [7,6,5,4,3,2,1];
  dat: any = [
    { beam_particle: "Ar", energy: 3.2, target_particle: "Al", event: "42.6486570000000000" },
    { beam_particle: "Ar", energy: 3.2, target_particle: "C", event: "13.1388550000000000" },
    { beam_particle: "Ar", energy: 3.2, target_particle: "Cu", event: "34.4328120000000000" },
    { beam_particle: "Ar", energy: 3.2, target_particle: "no target", event: "13.4596300000000000" },
    { beam_particle: "Ar", energy: 3.2, target_particle: "Pb", event: "15.4928070000000000" },
    { beam_particle: "Ar", energy: 3.2, target_particle: "Sn", event: "33.2008410000000000" },
    { beam_particle: "C", energy: 3.17, target_particle: "H2", event: "33.7383570000000000" },
    { beam_particle: "C", energy: 3.17, target_particle: "no target", event: "12.2693400000000000" },
    { beam_particle: "C", energy: 3.17, target_particle: "Pb", event: "6.0400260000000000" },
    { beam_particle: "C", energy: 3.17, target_particle: "SRC Lead 1", event: "39.7955220000000000" },
    { beam_particle: "C", energy: 3.17, target_particle: "SRC Lead 2", event: "2.2058790000000000" },
    { beam_particle: "C", energy: 3.17, target_particle: "SRC Lead 3", event: "1.9687410000000000" },
    { beam_particle: "Kr", energy: 2.3, target_particle: "Al", event: "3.3826180000000000" },
    { beam_particle: "Kr", energy: 2.3, target_particle: "Cu", event: "1.4980370000000000" },
    { beam_particle: "Kr", energy: 2.3, target_particle: "no target", event: "5.6587490000000000" },
    { beam_particle: "Kr", energy: 2.3, target_particle: "Sn", event: "1.1541300000000000" },
    { beam_particle: "Kr", energy: 2.6, target_particle: "Al", event: "14.2069870000000000" },
    { beam_particle: "Kr", energy: 2.6, target_particle: "Cu", event: "15.3896080000000000" },
    { beam_particle: "Kr", energy: 2.6, target_particle: "no target", event: "2.2224490000000000" },
    { beam_particle: "Kr", energy: 2.6, target_particle: "Pb", event: "3.8816980000000000" },
    { beam_particle: "Kr", energy: 2.6, target_particle: "Sn", event: "14.3478520000000000" },
    { beam_particle: "Kr", energy: 2.94, target_particle: "Cu", event: "2.3872500000000000" }];
    currentDate: number = Date.now();

  constructor() { this.start(); }
  perr(){
    this.per=!this.per;
  }
  start() {
    setTimeout(()=>{
      this.per=false;
  }, 200);
    let chartindex = -1; this.bname = []; let isPb = -1; let istotal = -1; let beam_prew = ""; let energy_prew = ""; let target_name = ""; let total;
    for (let i = 0; i < this.dat.length; i++) {
      if ((this.dat[i].beam_particle == beam_prew) && (this.dat[i].energy == energy_prew)) {
        if (this.anytarget.indexOf(this.dat[i].target_particle) != -1) {
          if (isPb == -1) {
            isPb = this.bname[chartindex].targets.length;
            this.bname[chartindex].targets.push("Pb"); this.bname[chartindex].event.push(parseFloat(this.dat[i].event));
          }
          else { this.bname[chartindex].event[isPb] = this.bname[chartindex].event[isPb] + parseFloat(this.dat[i].event); }
        } //заполнение
        else { this.bname[chartindex].targets.push(this.dat[i].target_particle); this.bname[chartindex].event.push(parseFloat(this.dat[i].event)); }
        this.bname[chartindex].total = this.bname[chartindex].total + parseFloat(this.dat[i].event);
        if (this.dat[i].target_particle == "Al") { this.bname[chartindex].color.push("#bfa6a6"); }
        else if (this.dat[i].target_particle == "Cu") { this.bname[chartindex].color.push("#c88033"); }
        else if (this.dat[i].target_particle == "C") { this.bname[chartindex].color.push("#909090"); }
        else if (this.dat[i].target_particle == "no target") { this.bname[chartindex].color.push("#d8d813"); }
        else if (this.dat[i].target_particle == "Pb") { this.bname[chartindex].color.push("#575961"); }
        else if (this.dat[i].target_particle == "Sn") { this.bname[chartindex].color.push("#668080"); }
        else if (this.dat[i].target_particle == "H2") { this.bname[chartindex].color.push("#ffffa0"); }
        else if (this.dat[i].target_particle == "C2H4") { this.bname[chartindex].color.push("#e5e0e0"); }
      }
      else {
        chartindex = chartindex + 1; isPb = -1; target_name = this.dat[i].target_particle; total = this.dat[i].event;
        if (this.anytarget.indexOf(this.dat[i].target_particle) != -1) { target_name = "Pb"; isPb = 0; }
        this.bname[chartindex] = { beam: this.dat[i].beam_particle, energy: this.dat[i].energy, targets: [target_name], event: [parseFloat(this.dat[i].event)], total: parseFloat(total), id: '', color: [] }
        if (this.dat[i].target_particle == "Al") { this.bname[chartindex].color.push("#bfa6a6"); }
        else if (this.dat[i].target_particle == "Cu") { this.bname[chartindex].color.push("#c88033"); }
        else if (this.dat[i].target_particle == "C") { this.bname[chartindex].color.push("#909090"); }
        else if (this.dat[i].target_particle == "no target") { this.bname[chartindex].color.push("#d8d813"); }
        else if (this.dat[i].target_particle == "Pb") { this.bname[chartindex].color.push("#575961"); }
        else if (this.dat[i].target_particle == "Sn") { this.bname[chartindex].color.push("#668080"); }
        else if (this.dat[i].target_particle == "H2") { this.bname[chartindex].color.push("#ffffa0"); }
        else if (this.dat[i].target_particle == "C2H4") { this.bname[chartindex].color.push("#e5e0e0"); }
        beam_prew = this.dat[i].beam_particle; energy_prew = this.dat[i].energy; target_name = this.dat[i].target_name; total = this.dat[i].event;
      }
    }
    for (let i = 0; i < this.bname.length; i++) { this.bname[i].total = this.bname[i].total.toFixed(2); this.bname[i].id = i; } this.printchart();//console.log(this.chartArray[0].options.series[0]);//console.log(this.bname);
  }
  printchart() {
    this.chartArray = []; this.chartcolor = null; let elemArray = []; let objmass;
    for (let i = 0; i < this.bname.length; i++) {
      let b = {}; objmass = [];
      for (let g = 0; g < this.bname[i].targets.length; g++) {
        b = { name: this.bname[i].targets[g], y: (+this.bname[i].event[g].toFixed(2)) };
        objmass.push(b);
      }
      elemArray.push(objmass);
    }
    for (let i = 0; i < this.bname.length; i++) {
      let a = new Chart({
        chart: {
          borderWidth: 0,
          plotShadow: false,
          margin: [0, 0, 0, 8],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0,
          style: {
            fontFamily: 'Arial, Helvetica, Clean, sans-serif'
          }
        },
        title:{
          text: ''
        },
        credits: { enabled: false },
        tooltip: { style: { color: '#1b1818' }, backgroundColor: '#ffffff', borderRadius: 5, borderWidth: 3, headerFormat: '<small></small>', pointFormat: '{point.name}:  {point.y} MEvents' },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            startAngle: -120,
            center: ["50%", "50%"],
            size: '51%',
            depth: 15,
            colors: this.bname[i].color,
            dataLabels: {
              enabled: true,
              distance: 15,
              style: { fontSize: 'inherit', fontWeight: "normal",fontFamily: '\'Lato\', sans-serif', lineHeight: '18px' },
              format: '{point.name}: <i>{point.y} MEvents</i>'
            }
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            data: elemArray[i]
          }
        ]
      });
      this.chartArray.push(a);
    }//console.log(this.chartArray[0].options.series);console.log(ll);//console.log(this.bname);
  }
}
