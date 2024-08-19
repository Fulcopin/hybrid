import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [
    IonicModule, // Esto incluye IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent
  ],
})
export class Tab3Page {
  constructor() {}
}
