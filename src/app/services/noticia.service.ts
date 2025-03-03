import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private apiUrl = 'http://localhost:8080/api/noticias'; 

  constructor(private http: HttpClient) {}

  obtenerNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl); 
  }

  obtenerNoticiaPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
