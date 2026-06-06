import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true, // <-- Cambiado a true
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}