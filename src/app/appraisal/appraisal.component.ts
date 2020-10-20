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

  public createFormAppraisal: FormGroup;

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
    this.createFormAppraisal = this.fb.group({
      'name': ['', Validators.required],
      'url': ['', Validators.required]
    });
  }

  public onCreate(E) {
    console.log(E.name)
    console.log(E.url)
  }

}
