import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiUrl = 'http://localhost:8080/oportunidades';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(this.apiUrl);
  }

  adicionar(oportunidade: any) {
    return this.httpClient.post(this.apiUrl, oportunidade);
  }

  deletar(id){
    return this.httpClient.delete(this.apiUrl, id);



  }


  }
