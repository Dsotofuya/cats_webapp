import { Component, OnInit } from '@angular/core';
import { CatServiceService } from './services/dogService';
import { IDog } from '../app/interfaces/IDog';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  dirreccion?: string;
  title = 'cats webapp';
  router: any;

  constructor(private catService: CatServiceService) {}

  ngOnInit(): void {
    this.cambiarImagen();
  }

  cambiarImagen(){
    this.catService.getDog().subscribe(
      (data) => {
        console.log(data);
        this.dirreccion = data.message;
        
      },(error: any) => {
    console.error('Error al consumir el servicio:', error);
  });
  }
}
