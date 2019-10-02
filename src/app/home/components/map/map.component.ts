import { Component, OnInit, Input, HostListener, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { ChartReadyEvent, GoogleChartComponent } from 'ng2-google-charts';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() region: string;
  @ViewChild(GoogleChartComponent, {static : true}) charComopnent: GoogleChartComponent;

  constructor() { }

  public chart: GoogleChartInterface = {
      chartType: 'GeoChart',
      dataTable: [
        ['Country',   'Places'],
        ['Germany',      5],
        ['Poland',      5],
        ['Lithuania',      3],
        ['Italy',     1],
        ['United Kingdom',     1]
      ],
      // opt_firstRowIsData: true,
      options: {
        region: this.region,
        colorAxis: {colors: ['#dbb25f', '#b59d60', '#929261']},
        backgroundColor: '#fcfcfa',
        datalessRegionColor: '#fcfcfa',
        defaultColor: 'black',
        legend: 'none',
      },
    };
    ngOnChanges(changes: SimpleChanges): void {
      console.log('On Changes');
      const height = ( window.innerWidth / 7 ) * 2;
      const width = window.innerWidth;

      this.chart.options.region = this.region;
      this.chart.options.height = height;
      this.chart.options.width = width;
    }


  ngOnInit() {
    console.log('On Init');
  }

  public ready(event: ChartReadyEvent) {
    console.log(event);
    // this.redraw();
  }
  
  public  redraw() {
    const height = ( window.innerWidth / 7 ) * 2;
    const ccComponent = this.chart.component;
    const ccWrapper = ccComponent.wrapper;

    // force a redraw
    ccWrapper.setOption('region', this.region);
    ccWrapper.setOption('height', height);
    ccComponent.draw();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event);
    this.redraw();
  }

}
