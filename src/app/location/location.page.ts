import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  async goBack() {
    await this.navCtrl.pop();
  }
}
