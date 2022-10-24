import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, lastValueFrom, map, Observable, of, switchMap, throwError } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable()
export class ApiService
{
    config = environment;
    private _authenticated: boolean = false;
    
    constructor(private _httpClient: HttpClient){
    }
    
    public getDados(): Observable<any>{ 
        return this._httpClient.get(`${this.config.api}`).pipe(
            catchError(err => {
                console.log("Erro ao consumir a API")
                return throwError(err);
            })
            
        )
    }

}