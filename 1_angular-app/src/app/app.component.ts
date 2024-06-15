import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hola Mundo desde componente de Angular';
  // pasar este subtitulo como titulo al hijo.
  subTitle = 'Contador con estado de session';
  users = ['John', 'Doe', 'Jane'];
  expression: any;
  visible: boolean = false;

  counter: number = 0;

  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log('Click en setVisible()');
  }

  setCounter(countEvent: number): void {
    this.counter = countEvent;
  }
}
