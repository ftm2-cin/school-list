import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService, School } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  public schoolLocation: School | undefined;
  map: GoogleMap | undefined;

  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.dataService.getSchoolBycoEntidade(parseInt(id, 10)).subscribe(
      (school) => {
        this.schoolLocation = school; 
        this.createMap();
      },
      (error) => {
        console.error('Error fetching school:', error);
      }
    );
  }

  async createMap() {
    const apiKey = 'AIzaSyAkkaInGN_qyU2bT9pd3y_HIWFbU51vs6o';
    const mapRef = document.getElementById('map');

    if (mapRef) {
      try {
        if (
          (this.schoolLocation?.latitude === 0 || this.schoolLocation?.latitude === 0.0) &&
          (this.schoolLocation?.longitude === 0 || this.schoolLocation?.longitude === 0.0)
        ) {
          // If latitude and longitude are both 0.0, show a message on the screen
          mapRef.innerHTML = mapRef.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-size: 24px; color: #ff0000;">
            <ion-icon style="font-size: 48px; margin-bottom: 10px;" name="alert-circle-outline"></ion-icon>
            <p>Posição não está cadastrada no sistema.</p>
          </div>
        `;;
        } else {
          this.map = await GoogleMap.create({
            id: 'my-map',
            element: mapRef,
            apiKey: apiKey,
            config: {
              center: {
                lat: this.schoolLocation?.latitude || 0,
                lng: this.schoolLocation?.longitude || 0,
              },
              zoom: 8,
            },
          });
  
          // Add a marker to the map if the location is valid
          if (this.map && this.schoolLocation?.latitude && this.schoolLocation?.longitude) {
            const markerId = await this.map.addMarker({
              coordinate: {
                lat: this.schoolLocation.latitude,
                lng: this.schoolLocation.longitude,
              },
            });
          }
        }
      } catch (error) {
        console.error('Error creating map:', error);
      }
    }
  }

  async goBack() {
    await this.navCtrl.pop();
  }
}
