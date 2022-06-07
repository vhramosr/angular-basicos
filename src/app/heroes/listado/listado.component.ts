import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  })
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Goku', 'Thor', 'Super Pato'];
  borrado :string = '';
  borrarHeroe(){
    this.borrado = this.heroes.shift()||'';
    
  }
}
