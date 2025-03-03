import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticia-detalle',
  standalone: true,
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.css'],
})
export class NoticiaDetalleComponent implements OnInit {
  noticia: any;
  noticiasRecomendadas: any[] = []; 

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const noticiaId = this.route.snapshot.paramMap.get('id');

    if (noticiaId) {
      this.obtenerNoticia(noticiaId);
    }
  }

  obtenerNoticia(id: string) {
    this.http.get(`http://localhost:8080/api/noticias/${id}`).subscribe(
      (data) => {
        this.noticia = data;
      },
      (error) => {
        console.error('Error cargando noticia:', error);
      }
    );
  }
}
