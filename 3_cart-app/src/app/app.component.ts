import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartAppComponent } from './components/cart-app.component';
import { PurecloudService } from './services/purecloud/purecloud.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = '3_cart-app';

  constructor(private purecloudService: PurecloudService) {}

  ngOnInit(): void {
    this.purecloudService.login();
  }
}
