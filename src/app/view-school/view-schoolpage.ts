import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private router: Router // Inject the Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.dataService.getSchoolBycoEntidade(parseInt(id, 10)).subscribe(
      (school) => {
        this.school = school || {} as School;
      },
      (error) => {
        console.error('Error fetching school:', error);
        // Handle the error as needed
      }
    );
  }

  goBack() {
    this.navCtrl.pop();
  }

  redirectToLocationInfo() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.router.navigate([`/school/${id}/location`]); // Navigate to the location page with the school ID
  }

  redirectToContactInfo() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.router.navigate([`/school/${id}/contact`]); // Navigate to the location page with the school ID
  }
}
