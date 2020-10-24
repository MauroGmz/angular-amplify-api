import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './../API.service';

import { PhotoICar, PhotoIDoc } from './../models/photos';
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
  photoCarCreate: PhotoICar;
  photoDocCreate: PhotoIDoc;
  /* declare appraisals variable */
  appraisal: AppraisalI;
  name: string;
  photosCar: PhotoICar[] = [];
  photosDoc: PhotoIDoc[] = [];

  constructor(private _api: APIService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormAppraisalName = this.fb.group({
      'name': ['', Validators.required]
    });
    this.createFormAppraisalUrlCar = this.fb.group({
      'url': ['', Validators.required]
    });
    this.createFormAppraisalUrlDoc = this.fb.group({
      'url': ['', Validators.required]
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
      this.addPhotosToAppraisal();
    })
    .catch(e => {
      console.log('error creating appraisal...', e);
    });
  }

  async createPhotoCar(photo: PhotoICar) {
    await this._api.CreatePhotoCar(photo).then(event => {
      console.log('Photo created!');
    })
    .catch(e => {
      console.log('error creating Photo...', e);
    });
  }

  async createPhotoDoc(photo: PhotoIDoc) {
    await this._api.CreatePhotoDoc(photo).then(event => {
      console.log('Photo created!');
    })
    .catch(e => {
      console.log('error creating Photo...', e);
    });
  }

  public addPhotosToAppraisal() {
    for (let photo of this.photosCar) {
      this.photoCarCreate = {
        photoCarAppraisalId: this.appraisalID,
        url: photo.url
      }
      this.createPhotoCar(this.photoCarCreate);
    }
    for (let photo of this.photosDoc) {
      this.photoDocCreate = {
        photoDocAppraisalId: this.appraisalID,
        url: photo.url
      }
      this.createPhotoDoc(this.photoDocCreate);
    }
  }

}
