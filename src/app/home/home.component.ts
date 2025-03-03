import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaService } from '../services/noticia.service';
import { Noticia } from '../models/noticia.model';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  noticias: Noticia[] = [];

  constructor(private noticiaService: NoticiaService, private router: Router) {}

  ngOnInit(): void {
    this.noticiaService.obtenerNoticias().subscribe({
      next: (data) => (this.noticias = data),
      error: (err) => console.error('Error cargando noticias', err)
    });
  }

  verDetalles(id: number) {
    console.log('🔍 Navegando a detalle de noticia:', id);
    this.router.navigate(['/noticia', id]);
  }
}
