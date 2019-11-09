import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  regions = ['150', 'LT', 'IT'];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  @ViewChild('activeMap', {read: ViewContainerRef, static: false}) activeMap: ViewContainerRef;

  constructor() { }

  ngOnInit() {
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  
  onSlide(slideEvent: NgbSlideEvent) {
    // this.activeMap.myfunction('LT');
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
