import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { APIService } from './../API.service';

import { PhotoType } from './../../types/photo';
import { Appraisal } from './../../types/appraisal';
import { Photo } from './../models/photo';

@Component({
  selector: 'app-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.scss']
})
export class AppraisalComponent implements OnInit {

  public createFormAppraisalName: FormGroup;
  public createFormAppraisalUrl: FormGroup;

  name: string;
  photosArray: Photo[] = [
    /*
    {url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {url: "https://material.angular.io/assets/img/examples/shiba2.jpg"}
  */];

  constructor(private api: APIService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormAppraisalName = this.fb.group({
      'name': ['', Validators.required]
    });
    this.createFormAppraisalUrl = this.fb.group({
      'url': ['', Validators.required]
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

}
