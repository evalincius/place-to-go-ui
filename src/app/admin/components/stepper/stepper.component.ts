import { Component, OnInit } from '@angular/core';
import Stepper from "bs-stepper";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PlaceService} from "../../service/place.service";

@Component({
  selector: 'p2g-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor(private fb: FormBuilder, private placeService: PlaceService) {}

  private stepper: Stepper;
  placeForm: FormGroup;
  place: Place;
  showToast = false;

  next() {
    this.stepper.next();
  }

  submit() {
    const placeImage = this.placeForm.value['place-image'];

    if(placeImage.blob) {
      this.placeService.uploadFile(placeImage.blob).subscribe((metadata: FileMetadata) => {
        this.place.imageId = metadata.id;
        this.placeService.createPlace(this.place).subscribe(key => this.resetForm());
      });
    }
  }

  resetForm(){
    const placeDetails = this.placeForm.controls['place-details'];
    const placeLocation = this.placeForm.controls['place-location'];
    const placeImage = this.placeForm.controls['place-image'];
    this.placeForm.reset();
    placeImage.reset();
    placeLocation.reset();
    placeDetails.reset();
    this.stepper.to(0);
    this.showToast = true;
  }

  ngOnInit() {
    this.place = {
      countryCode: null,
      city: null,
      name: null,
      coordinates: null,
      imageId: null,
      imageURL: null,
      address: null
    }
    const stepper = document.querySelector('#stepper1');
    this.stepper = new Stepper(stepper, {
      linear: false,
      animation: true
    });
    stepper.addEventListener('show.bs-stepper', (event: any) => {
      // You can call prevent to stop the rendering of your step
      if(event.detail.indexStep == 3){
        this.updatePlace();
      }
    })

    this.placeForm = this.fb.group({})
  }

  private updatePlace(){
    const placeDetails: PlaceDetails = this.placeForm.value['place-details'];
    const placeLocation: PlaceLocation = this.placeForm.value['place-location'];
    const placeImage = this.placeForm.value['place-image'];
    this.place = {
      name : placeDetails.name,
      countryCode : placeLocation.countryCode,
      city : placeLocation.city,
      coordinates : placeLocation.coordinates,
      address : placeLocation.address,
      imageURL : placeImage.imageURL
    }
  }

  /**
   * After a form is initialized, we link it to our main form
   */
  formInitialized(name: string, form: FormGroup) {
    this.placeForm.setControl(name, form);
  }

}
