import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api'
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';


@Component({
  selector: 'app-navbar',
  imports: [ MenubarModule , ButtonModule , ImageModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Get Started',
      items: [
        { label: 'Overview', icon: 'pi pi-info-circle' },
        { label: 'Quick Setup', icon: 'pi pi-bolt' }
      ]
    },
    {
      label: 'Backing Up',
      items: [
        { label: 'Online Backup', icon: 'pi pi-cloud-upload' },
        { label: 'Local Backup', icon: 'pi pi-save' }
      ]
    },
    {
      label: 'Restoration',
      items: [
        { label: 'Restore Data', icon: 'pi pi-replay' },
        { label: 'Recovery Options', icon: 'pi pi-shield' }
      ]
    },
    {
      label: 'Documentation',
      icon: 'pi pi-book'
    }
  ];

}
