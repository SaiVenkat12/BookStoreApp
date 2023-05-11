import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  baseUrl = 'https://bookstore.incubation.bridgelabz.com/bookstore_user/'

  constructor(private httpClient: HttpClient) { }

  postService(url: string, reqPayload: any, token: boolean, httpAuthOptions: any) {
    return this.httpClient.post(this.baseUrl + url, reqPayload, token && httpAuthOptions);
  }
}