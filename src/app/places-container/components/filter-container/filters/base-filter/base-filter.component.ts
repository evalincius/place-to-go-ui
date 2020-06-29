import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'p2g-base-filter',
  templateUrl: './base-filter.component.html',
  styleUrls: ['./base-filter.component.scss']
})
export class BaseFilterComponent {
  @Input() filterBody: TemplateRef<any>;
  @Input() filterHeader: TemplateRef<any>;
  @Input() filterName: string;
  @Output() filterChanged = new EventEmitter();

  isCollapsed = true;

  constructor() { }

  toggleExpandCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
