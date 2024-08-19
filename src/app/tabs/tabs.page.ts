import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons'; // Importa correctamente addIcons
import { camera, peopleCircle } from 'ionicons/icons'; // Importa los íconos necesarios

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule], // Usa IonicModule para incluir todos los componentes de Ionic
})
export class TabsPage {
  constructor() {
    addIcons({ camera, peopleCircle }); // Mantén la funcionalidad de los íconos
  }
}
