import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Personagem } from 'src/app/interfaces/personagem';
import { ListService} from 'src/app/services/list.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formPersonagem = new FormGroup({
  nomePersonagem: new FormControl()
  })
  
  nomePersonagem: string = '';
  listaPersonagens: Personagem[] = [];
  
  dadosJogador: any ={
    Name: "", KillFame: "", DeathFame: "", LifetimeStatistics: {
      PvE: { Total: "" },
      Gathering: { All: { Total: "" } },
      Crafting: { Total: "" }
    },
    FishingFame: ""
  };

  constructor(private listService : ListService) {}

  async pesquisarPersonagem(){
    this.listaPersonagens = await firstValueFrom(await this.listService.buscarNomePersonagem(this.nomePersonagem))

    if (this.listaPersonagens.length > 0){
      console.log(this.listaPersonagens);
    }
  }
/*   createForm(personagem: Personagem){
    this.formPersonagem = new FormGroup({
      nomePersonagem: new FormControl(personagem.nomePersonagem)
    })
  }  */
  criarFormulario(personagem: Personagem){
    this.formPersonagem = new FormGroup({
      nomePersonagem: new FormControl(personagem.nome)
    })
  }
}
