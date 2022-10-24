import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api-service';
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

    this.apiService.getDados()
    .subscribe( response => {
      this.dados = response.result;
    })

  }

}
