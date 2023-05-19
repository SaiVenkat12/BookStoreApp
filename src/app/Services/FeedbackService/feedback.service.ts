import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  token: any;
  constructor(private httpService: HttpService) { }

  AddFeedback(reqdata: any, Id: any) {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('add/feedback/' + Id, reqdata, true, httpHeadersOption)
  }

  getFeedback(Id: any) {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService("get/feedback/" + Id, true, httpHeadersOption)
  }
}
