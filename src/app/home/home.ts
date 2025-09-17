import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService = inject(Housing);
  filteredLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocationInfo[]) => { 
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
    // this.filteredLocationList = this.housingLocationList;
  }

  filterResults(city: string) { 
    if (!city) { 
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter((housingLocation) => housingLocation?.city.toLowerCase().includes(city.toLowerCase()),
    );

   }
}
