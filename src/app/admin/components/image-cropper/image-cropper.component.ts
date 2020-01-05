import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ImageCroppedEvent} from "ngx-image-cropper";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'p2g-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>()
  imageChangedEvent: any = '';
  placeImageForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.placeImageForm = this.fb.group({
      imageURL: null,
      blob:null
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.placeImageForm);
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.placeImageForm.setValue({
      imageURL: event.base64,
      blob: event.file
    });
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

}
