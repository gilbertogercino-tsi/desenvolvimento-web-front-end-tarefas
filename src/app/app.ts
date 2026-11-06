import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionaContato } from './adiciona-contato/adiciona-contato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdicionaContato],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Agenda';
}
