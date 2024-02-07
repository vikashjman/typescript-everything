import * as L from 'leaflet';
import { User } from './User';
import { Company } from './Company';

export interface Mappable{
  location:{
    lat: number,
    lng: number
  };

  markerContent():string;

  color:string;

}

export class Map {
  private map: L.Map;

  constructor(mapId: string) {
    this.map = L.map(mapId).setView([0, 0], 1);
    L.tileLayer(
      'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=K16v1rY4C2GTgQgLIY7T',
      {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution:
          '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
        crossOrigin: true,
      }
    ).addTo(this.map); 
  }

  public addMarker(mappable: Mappable): void {
    const marker = L.marker([mappable.location.lat, mappable.location.lng]).addTo(
      this.map
    );
    marker.bindPopup(mappable.markerContent()).openPopup();
  }
}
