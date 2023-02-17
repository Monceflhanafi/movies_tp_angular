import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies tp angular';
  showImages = true;
  ShowImage() {
    this.showImages = !this.showImages;
  }
  movies = [
    {
      name: 'LE BLEU DU CAFTAN',
      realisateur: 'Maryam Touzani',
      pays: 'France, Maroc, Belgique, Danemark',
      img: 'assets/images/Blue-Caftan.jpg',
      starRating: 3,
    },
    {
      name: 'ALMA VIVA',
      realisateur: 'Cristèle Alves Meira',
      pays: 'France, Portugal',
      img: 'assets/images/Alma-Viva.jpeg',
      starRating: 4,
    },
    {
      name: 'RED SHOES',
      realisateur: 'Carlos Kaiser Eichelmann',
      pays: 'Mexique, Italie',
      img: 'assets/images/Red-Shoes.jpg',
      starRating: 5,
    },
    {
      name: 'ASTRAKAN',
      realisateur: 'David Depesseville',
      pays: 'France',
      img: 'assets/images/Astrakan.jpg',
      starRating: 4,
    },
  ];
}
