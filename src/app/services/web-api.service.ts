import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from '../API.service';
import { AppraisalI } from '../models/appraisalC';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private _api: APIService) { }

  getAppraisals(): Promise<any> {
    return this._api.ListAppraisalCs();
  }

  getAppraisalsById(id):Promise<any>{
    return this._api.GetAppraisalC(id);
  }
}
