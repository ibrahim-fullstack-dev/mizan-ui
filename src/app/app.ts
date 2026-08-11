import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, NavbarComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
