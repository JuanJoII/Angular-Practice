import { Component, signal } from '@angular/core';
import {RouterModule} from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PageHeader } from './page-header/page-header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageHeader, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Homes');
}
