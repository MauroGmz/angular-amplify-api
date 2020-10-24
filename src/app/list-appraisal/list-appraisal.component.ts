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
        //console.log("el id de la tasación es: " + this.appraisalBID)
        this._api.GetAppraisalC(this.appraisalID).then(data => {
          this.allAppraisals.push(data); 
        })
      });
      console.log(this.allAppraisals)
    });

  }

  viewAppraisalDetails(idAppraisal) {
    this.router.navigate(['/list-appraisal', idAppraisal, 'appraisals'])
  }

}
