import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Asegúrate de que esté esta línea
import { CommonModule } from '@angular/common'; // <-- Y esta también

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule], // <-- ¡Esta es la que rompe el error!
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isCollapsed = false;
  menuItems = [
    { label: 'Dashboard', icon: 'fa-solid fa-chart-line', route: '/main/dashboard' },
    { label: 'Proyectos', icon: 'fa-solid fa-code-branch', route: '/main/projects' },
    { label: 'Perfil', icon: 'fa-solid fa-user-circle', route: '/main/profile' },
    { label: 'Calendario', icon: 'fa-solid fa-calendar-days', route: '/main/calendar' }
  ];
  expandedItem: string | null = null;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.expandedItem = null;
    }
  }

  toggleExpanded(label: string) {
    if (!this.isCollapsed) {
      this.expandedItem = this.expandedItem === label ? null : label;
    }
  }
}