import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from './../API.service';
import { AppraisalI } from './../models/appraisalC';


@Component({
  selector: 'app-list-appraisal',
  templateUrl: './list-appraisal.component.html',
  styleUrls: ['./list-appraisal.component.scss']
})
export class ListAppraisalComponent implements OnInit {

  appraisalID: any;
  appraisals: any;
  allAppraisals: any[] = [];

  constructor(private _api: APIService, private router: Router) { }

  async ngOnInit() {

    /* fetch appraisals when app loads */
    await this._api.ListAppraisalCs().then(data => {
      this.appraisals = data.items;
      this.appraisals.forEach((element) => {
        this.appraisalID = element.id;
        this.getAppraisal(this.appraisalID)
      });
      console.log(this.allAppraisals)
    });

  }

  public async getAppraisal(id) {
    await this._api.GetAppraisalC(id).then(data => {
      this.allAppraisals.push(data); 
    })
  }

  viewAppraisalDetails(idAppraisal) {
    this.router.navigate(['/list-appraisal', idAppraisal, 'appraisal-detail'])
  }

}
