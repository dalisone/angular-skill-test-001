import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getdados(){
    var data = JSON.stringify({});
    var config = {
      method: 'get',
      url: environment.api,
      headers: { 
        'Content-Type': 'application/json',
      },
      data : data
    };
    return axios(config)
    .then(response => {
      return response.data.result
    })
    .catch(function (error:any) {
      return console.log(error);
    });
  }

}
