import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MonsterCardComponent } from 'halloween-ui';

interface Elemento {
  titulo: string;
  imagen: string;
  frase: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MonsterCardComponent],
})
export class Tab3Page {
  elementos: Elemento[] = [
    { titulo: 'Cementerio con niebla', imagen: 'assets/img/cementerio.jpg', frase: 'El frío llega antes que ellos.' },
    { titulo: 'Velas en la noche', imagen: 'assets/img/velas.jpg', frase: 'Las velas no se apagan nunca.' },
    { titulo: 'El cruceiro', imagen: 'assets/img/cruz.jpg', frase: 'Quien se acerca a la cruz no teme a la noche.' },
    { titulo: 'Camino oscuro', imagen: 'assets/img/compana.jpg', frase: 'Los caminos de noche tienen otros dueños.' },
  ];
}