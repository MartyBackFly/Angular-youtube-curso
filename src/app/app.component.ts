import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo: string;
  numero?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Mi pequeño Code';
  public ArregloTarjetas: Tarjeta[] = [];


ngOnInit(): void {

this.ArregloTarjetas = [

{titulo: 'video 1', subtitulo: 'subtitulo Video 1',numero:5 },
{titulo: 'video 2', subtitulo: 'subtitulo Video 2' },
{titulo: 'video 3', subtitulo: 'subtitulo Video 3' },  
]

}


}
