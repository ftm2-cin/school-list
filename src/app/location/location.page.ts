import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService, School } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  public schoolLocation: School | undefined;

  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.dataService.getSchoolBycoEntidade(parseInt(id, 10)).subscribe(
      (school) => {
        this.schoolLocation = school; // Assign school location data to schoolLocation
      },
      (error) => {
        console.error('Error fetching school:', error);
        // Handle the error as needed
      }
    );
  }

  async goBack() {
    await this.navCtrl.pop();
  }
}
