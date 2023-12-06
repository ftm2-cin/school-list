import { Component, inject, OnInit } from '@angular/core';
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
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.school = this.data.getSchoolById(parseInt(id, 10));
  }

  goBack() {
    this.navCtrl.back();
  }
}
