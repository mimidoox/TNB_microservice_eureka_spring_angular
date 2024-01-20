import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Terrain } from '../models/terrain';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {

  private apiUrl = 'http://localhost:8888/SERVICE-TNB/api/terrain';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getTerrains(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`, { headers: this.getHeaders() });
  }

  deleteTerrain(id?: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`, { headers: this.getHeaders() });
  }

  addTerrain(newTerrain: Terrain): Observable<Terrain> {
    return this.http.post<Terrain>(`${this.apiUrl}/save`, newTerrain, { headers: this.getHeaders() });
  }

  updateTerrain(updatedTerrain: Terrain): Observable<Terrain> {
    return this.http.put<Terrain>(`${this.apiUrl}/update/${updatedTerrain.id}`, updatedTerrain, { headers: this.getHeaders() });
  }
}
