import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartReadyEvent, GoogleChartComponent} from "ng2-google-charts";
import {GoogleChartInterface} from "ng2-google-charts/google-charts-interfaces";

@Component({
  selector: 'p2g-geo-charts',
  templateUrl: './geo-charts.component.html',
  styleUrls: ['./geo-charts.component.scss']
})
export class GeoChartsComponent implements OnInit, OnChanges {

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
      explorer: {},
      enableRegionInteractivity: true
      // explorer: { axis: 'horizontal' }
    }
  };
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes');
    const height = ( window.innerWidth / 6 ) * 2;
    const width = window.innerWidth;

    let chartOptions: any = this.chart.options;

    chartOptions.region = this.region;
    chartOptions.height = height;
    chartOptions.width = width;
  }

  ngOnInit() {
    this.resetChartDimensions();
  }

  public ready(event: ChartReadyEvent) {
    console.log(event);
  }

  public redraw() {
    this.resetChartDimensions();
    this.chart.component.draw();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event);
    this.redraw();
  }

  private resetChartDimensions() {
    const height = ( window.innerWidth / 6 ) * 2;
    const width = window.innerWidth;

    let chartOptions: any = this.chart.options;

    chartOptions.region = this.region;
    chartOptions.height = height;
    chartOptions.width = width;
  }
}
