import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './../API.service';


@Component({
  selector: 'app-new-appraisal',
  templateUrl: './new-appraisal.component.html',
  styleUrls: ['./new-appraisal.component.scss']
})
export class NewAppraisalComponent implements OnInit {

  public createFormAppraisalName: FormGroup;
  public createFormAppraisalUrlCar: FormGroup;
  public createFormAppraisalUrlDoc: FormGroup;

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
    console.log(n.name);
  }

  public onCreateUrlCar(u) {
    console.log(u.urlCar);
  }

  public onCreateUrlDoc(u) {
    console.log(u.urlDoc);
    
  }

}
