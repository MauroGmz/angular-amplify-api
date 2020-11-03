import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProxyCmp } from '@aws-amplify/ui-angular';
import { WebApiService } from '../services/web-api.service';
import { APIService } from './../API.service';
import { AppraisalI } from './../models/appraisalC';
import { Storage } from 'aws-amplify';

import { url } from "./../../aws-exports";

@Component({
  selector: 'app-list-appraisal',
  templateUrl: './list-appraisal.component.html',
  styleUrls: ['./list-appraisal.component.scss']
})
export class ListAppraisalComponent implements OnInit {

  link = url;

  appraisalID: any;
  appraisals: Array<any>;
  allAppraisals: any[] = [];
  result: any;

  constructor(private _api: WebApiService, private router: Router) { }

  async ngOnInit() {
    /* fetch appraisals when app loads */
    await this._api.getAppraisals().then(event => {
      this.appraisals = event.items;
      console.log(this.appraisals);
      
    });
    for (let element of this.appraisals) {
      this.appraisalID = element.id;
      await this.getAppraisal(this.appraisalID)
    }
    console.log("all appraisals:")
    console.log(this.allAppraisals)
    await Storage.put('test1.txt', 'Hello')
    .then (result => this.result = result) // {key: "test.txt"}
    .catch(err => console.log(err));
    console.log(this.result);
    var urlLink = this.link + this.result.key;
    console.log(urlLink);
    
  

  }

  async getAppraisal(id) {
    await this._api.getAppraisalsById(id).then(data => {
      this.allAppraisals.push(data); 
    })
  }

  viewAppraisalDetails(idAppraisal) {
    this.router.navigate(['/list-appraisal', idAppraisal, 'appraisal-detail'])
  }

}
