import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'p2g-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

  createNewLocation(form: NgForm) {
    const val = form.form.controls.name.value;
    console.log(val);
    form.reset();
  }

  onGeocodeToggled(event: any) {
    if(event) {

    } else {
      this.isCollapsed = true;
    }
  }
}
