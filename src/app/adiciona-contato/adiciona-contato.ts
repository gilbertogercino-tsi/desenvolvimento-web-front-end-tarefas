import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contato, TipoContato } from '../contato';

interface OpcoesSelect {
  id: number;
  value: TipoContato;
}

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss'
})
export class AdicionaContato {
  readonly SELECT_TIPO: OpcoesSelect[] = [
    { id: 1, value: 'Amigo(a)' },
    { id: 2, value: 'IFRN' },
    { id: 3, value: 'Trabalho' },
    { id: 4, value: 'Família' },
    { id: 5, value: 'Outro' }
  ];

  contatos: Contato[] = [];

  adicionar(nome: string, telefone: string, email: string, aniversario: string, tipo: string) {
  const novoContato = new Contato(nome, telefone, email, aniversario, tipo as TipoContato);
  this.contatos.push(novoContato);
 }
}
