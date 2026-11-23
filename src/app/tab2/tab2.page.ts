import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MonsterCardComponent } from 'halloween-ui';

interface Apartado {
  titulo: string;
  imagen: string;
  texto: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MonsterCardComponent],
})
export class Tab2Page {
  apartados: Apartado[] = [
    {
      titulo: 'Origen',
      imagen: 'assets/img/cementerio.jpg',
      texto: 'Leyenda gallega: a medianoche, las almas salen de los cementerios y recorren caminos y encrucijadas en procesión.',
    },
    {
      titulo: 'Poderes',
      imagen: 'assets/img/compana.jpg',
      texto: 'Anuncia la muerte a quien la ve, obliga a un vivo a guiarla y deja un olor a cera y un frío intenso.',
    },
    {
      titulo: 'Debilidades',
      imagen: 'assets/img/cruz.jpg',
      texto: 'Dibujar un círculo en el suelo y quedarse dentro, o llevar una cruz, protege de la procesión.',
    },
    {
      titulo: 'Curiosidades',
      imagen: 'assets/img/velas.jpg',
      texto: 'Está ligada a Samaín y a la noche de las ánimas, el origen de nuestro Halloween.',
    },
  ];
}