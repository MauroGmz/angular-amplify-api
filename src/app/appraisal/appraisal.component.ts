import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { APIService } from './../API.service';

import { PhotoType } from './../../types/photo';
import { Appraisal } from './../../types/appraisal';
import { Photo } from './../models/photo';
import { PhotoICar } from './../models/photos';
import { AppraisalI } from './../models/appraisal';


@Component({
  selector: 'app-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.scss']
})
export class AppraisalComponent implements OnInit {

  public createFormAppraisalName: FormGroup;
  public createFormAppraisalUrl: FormGroup;

  appraisalID: string;
  appraisalBID: any;
  appraisalsI: Appraisal;

  appraisal: Appraisal;
  photoType: PhotoType;
  photosCar: PhotoType[] = [];

  /* declare appraisals variable */
  appraisals: Array<AppraisalI>;
  appraisalsB: any;
  allAppraisals: Appraisal[] = [];

  name: string;
  photosArray: PhotoICar[] = [
    /*
    {url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {url: "https://material.angular.io/assets/img/examples/shiba2.jpg"}
  */];

  constructor(private _api: APIService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.createFormAppraisalName = this.fb.group({
      'name': ['', Validators.required]
    });
    this.createFormAppraisalUrl = this.fb.group({
      'url': ['', Validators.required]
    });

    
    
    /* fetch appraisals when app loads */
    this._api.ListAppraisalCs().then(data => {
      this.appraisalsB = data.items;
      this.appraisalsB.forEach((element) => {
        this.appraisalBID = element.id;
        //console.log("el id de la tasación es: " + this.appraisalBID)
        this._api.GetAppraisalC(this.appraisalBID).then(data => {
          this.allAppraisals.push(data); 
        })
      });
      console.log(this.allAppraisals)
    });

    /* subscribe to new appraisals being created */
    this._api.OnCreateAppraisalCListener.subscribe( (event: any) => {
      const newAppraisal = event.value.data.onCreateAppraisalB;
      console.log(newAppraisal)
      this.appraisalsB = [newAppraisal, ...this.appraisalsB];
      this.appraisalBID = newAppraisal.id;
      this._api.GetAppraisalC(this.appraisalBID).then(data => {
        this.allAppraisals.push(data); 
      })
    });
  }

  public onCreateName(N) {
    console.log(N.name);
    this.name = N.name;
  }

  public onCreateUrl(U) {
    console.log(U.url);
    this.photosArray.push(U);
  }

  public onCreateAppraisal() {
    this.appraisal = {
      name: this.name
    }
    this.saveAppraisal(this.appraisal);
  }

  async saveAppraisal(appraisal: Appraisal){
    console.log(appraisal);
    await this._api.CreateAppraisalC(appraisal).then(event => {
      this.appraisalID = event.id;
      console.log(event.id)
      console.log('Appraisal created!');
      console.log("this is appraisalID variable: " + this.appraisalID);
      this.addPhotoToAppraisal();
    })
    .catch(e => {
      console.log('error creating appraisal...', e);
    });
  }

  async addPhotoToAppraisal() {
    for (let photo of this.photosArray) {
      this.photoType = {
        appraisalBID: this.appraisalID,
        url: photo.url
      }
      await this._api.CreatePhotoCar(this.photoType).then(event => {
        console.log('Photo created!');
      })
      .catch(e => {
        console.log('error creating Photo...', e);
      });
    }
  }

}
