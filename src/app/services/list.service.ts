import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import { Personagem } from '../personagem';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = "https://localhost:7002/api";
  constructor(private http: HttpClient) { }

  async buscarNomePersonagem(nome: String):Promise<Observable<Personagem[]>>{
    return await this.http.get<Personagem[]>(this.apiUrl + "/Albion/" + nome);
  }
}