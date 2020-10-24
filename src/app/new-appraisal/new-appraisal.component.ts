import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './../API.service';

import { PhotoI } from './../models/photos';
import { AppraisalI } from './../models/appraisalC';


@Component({
  selector: 'app-new-appraisal',
  templateUrl: './new-appraisal.component.html',
  styleUrls: ['./new-appraisal.component.scss']
})
export class NewAppraisalComponent implements OnInit {

  public createFormAppraisalName: FormGroup;
  public createFormAppraisalUrlCar: FormGroup;
  public createFormAppraisalUrlDoc: FormGroup;

  /* variables for create appraisal */
  appraisalID: string;
  photoCreate: PhotoI;

  /* declare appraisals variable */
  appraisal: AppraisalI;
  name: string;
  photosCar: PhotoI[] = [];
  photosDoc: PhotoI[] = [];

  constructor(private _api: APIService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormAppraisalName = this.fb.group({
      'name': ['', Validators.required]
    });
    this.createFormAppraisalUrlCar = this.fb.group({
      'urlCar': ['', Validators.required]
    });
    this.createFormAppraisalUrlDoc = this.fb.group({
      'urlDoc': ['', Validators.required]
    });
  }

  public onCreateName(n) {
    this.name = n.name;
  }

  public onCreateUrlCar(u) {
    this.photosCar.push(u);
  }

  public onCreateUrlDoc(u) {
    this.photosDoc.push(u);
  }

  public onCreateAppraisal() {
    this.appraisal = {
      name: this.name
    }
    this.saveAppraisal(this.appraisal);
  }

  async saveAppraisal(appraisal: AppraisalI){
    await this._api.CreateAppraisalC(appraisal).then(event => {
      this.appraisalID = event.id;
      console.log('Appraisal created!');
      console.log("this is appraisalID variable: " + this.appraisalID);
      this.addPhotosToAppraisal();
    })
    .catch(e => {
      console.log('error creating appraisal...', e);
    });
  }

  async createPhoto(photo: PhotoI) {
    await this._api.CreatePhotoC(photo).then(event => {
      console.log('Photo created!');
    })
    .catch(e => {
      console.log('error creating Photo...', e);
    });
  }

  public addPhotosArray(photos: PhotoI[]) {
    for (let photo of photos) {
      this.photoCreate = {
        photoCAppraisalId: this.appraisalID,
        url: photo.url
      }
      this.createPhoto(this.photoCreate);
    }
  }

  public addPhotosToAppraisal() {
    this.addPhotosArray(this.photosCar);
    this.addPhotosArray(this.photosCar);
  }

}
