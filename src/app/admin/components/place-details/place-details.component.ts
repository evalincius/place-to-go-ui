import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'p2g-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>()
  placeDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.placeDetailsForm = this.fb.group({
      name: null
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.placeDetailsForm);
  }

  // saveDetails(form: NgForm) {
  //   const name = form.form.controls.name.value;
  //   this.onDetailsSaved.emit({name: name})
  // }

}
