import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getdados(){
    var data = JSON.stringify({});
    var config = {
      method: 'get',
      url: 'https://nova.bitcambio.com.br/api/v3/public/getassets',
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
