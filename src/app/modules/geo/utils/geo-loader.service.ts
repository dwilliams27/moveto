import { Injectable } from "@angular/core";
import * as geoData from 'data/us-shape/cb_2018_us_state_500k.json';
import { GeoFeature, MultiPolygonCoordinates, PolygonCoordinates, StateIndex } from "../models/geo.models";

@Injectable({
  providedIn: 'root'
})
export class GeoLoaderService {
  private readonly DATA = (geoData as any).default.features as unknown as GeoFeature[];

  constructor() {}

  get data() {
    return this.DATA;
  }

  getCoordDataPairwise(featureIndex: number) {
    const geodata = this.DATA[featureIndex].geometry;
    if(geodata.type === 'Polygon') {
      const result: PolygonCoordinates  = [];
      for(let i = 0; i < geodata.coordinates.length; i++) {
        const normalizedData = this.normalizeCoordinates(geodata.coordinates[i]);
        for(let i2 = 0; i2 < normalizedData.length - 1; i2++) {
          result.push([normalizedData[i2], normalizedData[i2 + 1]]);
        }
      }
      return { result, type: geodata.type };
    } else {
      const result: MultiPolygonCoordinates = [];
      for(let i = 0; i < geodata.coordinates.length; i++) {
        for(let i2 = 0; i2 < geodata.coordinates[i].length - 1; i2++) {
          const normalizedData = this.normalizeCoordinates(geodata.coordinates[i][i2]);
          const tempResult: [[number, number], [number, number]][] = [];
          for(let i3 = 0; i3 < normalizedData.length; i3++) {
            tempResult.push([normalizedData[i3], normalizedData[i3 + 1]]);
          }
          result.push(tempResult);
        }
      }
      return { result, type: geodata.type };
    }
  }

  normalizeCoordinates(coords: [number, number][]) {
    let xmin = Number.MAX_SAFE_INTEGER, ymin = Number.MAX_SAFE_INTEGER, xmax = Number.MIN_SAFE_INTEGER, ymax = Number.MIN_SAFE_INTEGER;
    coords.map((coord) => {
      xmax = coord[0] > xmax ? coord[0] : xmax;
      ymax = coord[1] > ymax ? coord[1] : ymax;
      xmin = coord[0] < xmin ? coord[0] : xmin;
      ymin = coord[1] < ymin ? coord[1] : ymin;
    });
    
    const xlength = xmax - xmin;
    const ylength = ymax - ymin;

    const result: [number, number][] = [];
    coords.map((coord) => {
      result.push([(coord[0] - xmin) / xlength, (coord[1] - ymin) / ylength]);
    });

    return result;
  }
}
