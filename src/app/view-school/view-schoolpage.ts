import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService, School } from '../services/data.service';

@Component({
  selector: 'app-view-school',
  templateUrl: './view-school.page.html',
  styleUrls: ['./view-school.page.scss'],
})
export class ViewSchoolPage implements OnInit {
  public school!: School;

  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.school = this.dataService.getSchoolBycoEntidade(parseInt(id, 10)) || {} as School;
  }

  goBack() {
    this.navCtrl.pop();
  }
}
