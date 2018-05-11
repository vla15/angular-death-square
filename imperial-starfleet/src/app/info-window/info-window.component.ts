import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {
  private dataBanks;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(p => this.findTurret(p.id));
  }

  findTurret(turretNumber: number) {
    this.http.get(`http://localhost:3000/api/turret/${turretNumber}`)
    .subscribe(d => this.dataBanks = d.json());
  }

}
