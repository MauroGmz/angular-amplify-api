import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../API.service';
import { AppraisalI } from '../models/appraisalC';

@Component({
  selector: 'app-appraisal-detail',
  templateUrl: './appraisal-detail.component.html',
  styleUrls: ['./appraisal-detail.component.scss']
})
export class AppraisalDetailComponent implements OnInit {

  constructor(private _api: APIService, private router: Router, private route: ActivatedRoute) { }

  appraisal: any;
  allAppraisals: any[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        this._api.GetAppraisalC(params.get("id")).then(data => {
          this.appraisal = data
          console.log(this.appraisal);
        });
      } else {
        this._api.ListAppraisalCs()
      }
    })
  }

  goToAppraisals() {
    this.router.navigate(['/list-appraisal']);
  }

}
