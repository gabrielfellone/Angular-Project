import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';

import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades = [];
  id: any = 11;

  constructor(
    private oportunidadeService: OportunidadeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.oportunidadeService.listar()
      .subscribe(resposta => this.oportunidades = resposta as any)
  }

  adicionar(){
    this.oportunidadeService.adicionar(this.oportunidade)
      .subscribe(() => {
        this.oportunidade = {};
        this.consultar();

        this.messageService.add({
          severity: 'success',
          summary: 'Oportunidade adicionada com sucesso'
        });
      },
      resposta => {
        let msg = 'Erro inesperado. Tente novamente.';

        if (resposta.error.message) {
          msg = resposta.error.message;
        }

        this.messageService.add({
          severity: 'error',
          summary: msg
        });
      });

  }

  deletar(){
    this.oportunidadeService.deletar(this.id)
      .subscribe(() => {
        this.oportunidade = {};
        this.consultar();

        this.messageService.add({
          severity: 'success',
          summary: 'Oportunidade adicionada com sucesso'
        });
      },
      resposta => {
        let msg = 'Erro inesperado. Tente novamente.';

        if (resposta.error.message) {
          msg = resposta.error.message;
        }

        this.messageService.add({
          severity: 'error',
          summary: msg
        });
      });

  }

}
