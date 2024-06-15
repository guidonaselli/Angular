import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  count: number = 0;
  // pasar datos del padre al hijo
  @Input() title!: string;

  // pasar hijos del HIJO al PADRE
  @Output() countEmmit = new EventEmitter<number>();

  ngOnInit(): void {
    const count = sessionStorage.getItem('count');
    if (count) {
      this.count = parseInt(count, 10);
      // Emitir el valor del contador después de recuperarlo de sessionStorage
      this.emitCount();
    }
  }

  increment(): void {
    this.count++;
    this.emitCount();
    this.saveCount();
  }

  decrement(): void {
    this.count--;
    this.emitCount();
    this.saveCount();
  }

  resetCount(): void {
    this.count = 0;
    this.emitCount();
    this.saveCount();
  }

  saveCount(): void {
    sessionStorage.setItem('count', this.count.toString());
  }

  emitCount(): void {
    this.countEmmit.emit(this.count);
  }
}
