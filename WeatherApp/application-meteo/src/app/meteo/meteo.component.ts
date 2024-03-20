import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  weatherInfo: any;

  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
    this.fetchWeather(); 
  }

  fetchWeather(): void {
    this.meteoService.getWeather('40.7128', '-74.0060').subscribe(data => {
      this.weatherInfo = data; 
    }, error => {
      console.error("Failed to fetch weather data", error);
    });
  }
}
