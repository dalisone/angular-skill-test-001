import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Dados } from '../dados';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {

  dados: Dados[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getdados()
    .then( (response : any) => {
      this.dados = response.result;
    })
  }

}
