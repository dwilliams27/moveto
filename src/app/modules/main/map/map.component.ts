import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import * as d3 from 'd3';
import { PolygonCoordinates, StateIndex } from "../../geo/models/geo.models";
import { GeoLoaderService } from "../../geo/utils/geo-loader.service";

const SCALE = 1000;

@Component({
  template: `
    <div style="marginTop:111px" #map>
    </div>
  `,
  styleUrls: ['./map.component.scss'],
  selector: `mt-map`
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map')
  myIdentifier: ElementRef;
  
  constructor(private _geoLoaderService: GeoLoaderService) {}

  ngAfterViewInit(): void {
    console.log(this.myIdentifier.nativeElement.offsetWidth, this.myIdentifier.nativeElement.offsetHeight);
    const DC_GEO = this._geoLoaderService.getCoordDataPairwise(StateIndex.DC.id);
    const SVG = d3.select('div').append('svg').attr('width', this.myIdentifier.nativeElement.offsetWidth).attr('height', 1000);
    console.log(DC_GEO.result);
    if(DC_GEO && DC_GEO.type === 'Polygon') {
      SVG.attr("class", "line")
        .selectAll("line").data(DC_GEO.result)
        .enter().append("line")
        .style("stroke", "gray") // <<<<< Add a color
        .attr("x1", (d) => { return SCALE*d[0][0] })
        .attr("y1", (d) => { return SCALE*d[0][1] })
        .attr("x2", (d) => { return SCALE*d[1][0] })
        .attr("y2", (d) => { return SCALE*d[1][1] })
    }

    const CA_GEO = this._geoLoaderService.getCoordDataPairwise(StateIndex.CA.id);
    console.log(CA_GEO)
    if(CA_GEO && CA_GEO.type === 'MultiPolygon') {
      for(let polygon of CA_GEO.result) {
        SVG.attr("class", "line")
          .selectAll("line").data(polygon)
          .enter().append("line")
          .style("stroke", "gray") // <<<<< Add a color
          .attr("x1", (d) => { return SCALE*d[0][0] })
          .attr("y1", (d) => { return SCALE*d[0][1] })
          .attr("x2", (d) => { return SCALE*d[1][0] })
          .attr("y2", (d) => { return SCALE*d[1][1] })
      }
     
    }
  }
}
