import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService, School } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public schoolContact: School | undefined;

  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.dataService.getSchoolBycoEntidade(parseInt(id, 10)).subscribe(
      (school) => {
        this.schoolContact = school; // Assign school location data to schoolContact
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

  redirectToWhatsApp() {
    if (this.schoolContact && this.schoolContact.nuTelefone) {
      const whatsappLink = `https://api.whatsapp.com/send?phone=${this.schoolContact.nuTelefone}`;
      window.open(whatsappLink, '_system', 'location=yes');
    } else {
      console.error('Phone number not available');
      // Handle the case where the phone number is not available
    }
  }
}
