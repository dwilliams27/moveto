
export interface GeoFeature {
  geometry: {
    coordinates: PolygonCoordinates, 
    type: 'Polygon'
  } | {
    coordinates: MultiPolygonCoordinates,
    type: 'MultiPolygon'
  };
  properties: GeoProperties;
}

export interface GeoProperties {
  STUSPS: string;
  GEOID: string;
  NAME: string;
}

export type PolygonCoordinates = [number, number][][];

export type MultiPolygonCoordinates = PolygonCoordinates[];

export const StateIndex = {
  MS: { id: 0, type: 'MultiPolygon'},
  NC: { id: 1, type: 'MultiPolygon'},
  OK: { id: 2, type: 'Polygon'},
  VA: { id: 3, type: 'MultiPolygon'},
  WV: { id: 4, type: 'Polygon'},
  LA: { id: 5, type: 'MultiPolygon'},
  MI: { id: 6, type: 'MultiPolygon'},
  MA: { id: 7, type: 'MultiPolygon'},
  ID: { id: 8, type: 'Polygon'},
  FL: { id: 9, type: 'MultiPolygon'},
  NE: { id: 10, type: 'Polygon'},
  WA: { id: 11, type: 'MultiPolygon'},
  NM: { id: 12, type: 'Polygon'},
  PR: { id: 13, type: 'MultiPolygon'},
  SD: { id: 14, type: 'Polygon'},
  TX: { id: 15, type: 'MultiPolygon'},
  CA: { id: 16, type: 'MultiPolygon'},
  AL: { id: 17, type: 'MultiPolygon'},
  GA: { id: 18, type: 'MultiPolygon'},
  PA: { id: 19, type: 'Polygon'},
  MO: { id: 20, type: 'Polygon'},
  CO: { id: 21, type: 'Polygon'},
  UT: { id: 22, type: 'Polygon'},
  TN: { id: 23, type: 'Polygon'},
  WY: { id: 24, type: 'Polygon'},
  NY: { id: 25, type: 'MultiPolygon'},
  KS: { id: 26, type: 'Polygon'},
  AK: { id: 27, type: 'MultiPolygon'},
  NV: { id: 28, type: 'Polygon'},
  IL: { id: 29, type: 'Polygon'},
  VT: { id: 30, type: 'Polygon'},
  MT: { id: 31, type: 'Polygon'},
  IA: { id: 32, type: 'Polygon'},
  SC: { id: 33, type: 'MultiPolygon'},
  NH: { id: 34, type: 'MultiPolygon'},
  AZ: { id: 35, type: 'Polygon'},
  DC: { id: 36, type: 'Polygon'},
  AS: { id: 37, type: 'MultiPolygon'},
  VI: { id: 38, type: 'MultiPolygon'},
  NJ: { id: 39, type: 'Polygon'},
  MD: { id: 40, type: 'MultiPolygon'},
  ME: { id: 41, type: 'MultiPolygon'},
  HI: { id: 42, type: 'MultiPolygon'},
  DE: { id: 43, type: 'MultiPolygon'},
  GU: { id: 44, type: 'MultiPolygon'},
  MP: { id: 45, type: 'MultiPolygon'},
  RI: { id: 46, type: 'MultiPolygon'},
  KY: { id: 47, type: 'MultiPolygon'},
  OH: { id: 48, type: 'MultiPolygon'},
  WI: { id: 49, type: 'MultiPolygon'},
  OR: { id: 50, type: 'MultiPolygon'},
  ND: { id: 51, type: 'Polygon'},
  AR: { id: 52, type: 'Polygon'},
  IN: { id: 53, type: 'Polygon'},
  MN: { id: 54, type: 'MultiPolygon'},
  CT: { id: 55, type: 'MultiPolygon'}
}
