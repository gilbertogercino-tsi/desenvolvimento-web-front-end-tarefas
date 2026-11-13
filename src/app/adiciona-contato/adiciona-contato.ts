import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Contato, TipoContato } from '../contato';

interface OpcoesSelect {
  id: number;
  value: TipoContato;
}

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    aniversario: new FormControl('', [Validators.required]),
    tipo: new FormControl('Amigo(a)' as TipoContato, [Validators.required])
  });

  adicionar() {
    if (this.formulario.valid) {
      const valores = this.formulario.value;
      const novoContato = new Contato(
        valores.nome!,
        valores.telefone!,
        valores.email!,
        valores.aniversario!,
        valores.tipo as TipoContato
      );
      this.contatos.push(novoContato);
      
      this.formulario.reset({
        tipo: 'Amigo(a)'
      });
    }
  }
}
