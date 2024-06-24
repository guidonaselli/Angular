import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PurecloudService } from './services/purecloud/purecloud.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'purecloud-training';

  constructor(private purecloudService: PurecloudService) {}

  ngOnInit(): void {
    this.purecloudService.login();
  }
}
