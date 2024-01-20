import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Redevable } from '../models/redevable';
import {Terrain} from "../models/terrain";

@Injectable({
  providedIn: 'root'
})
export class RedevableService {

  private apiUrl = 'http://localhost:8888/SERVICE-TNB/api/redevable';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getRedevables(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/all', { headers: this.getHeaders() });
  }

  deleteRedevable(redevableId?: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/delete/${redevableId}`;
    return this.http.delete(deleteUrl, { headers: this.getHeaders() });
  }

  updateRedevable(updatedRedevable: Redevable): Observable<any> {
    const updateUrl = `${this.apiUrl}/update/${updatedRedevable.id}`;
    return this.http.put(updateUrl, updatedRedevable, { headers: this.getHeaders() });
  }

  addRedevable(newRedevable: Redevable): Observable<any> {
    const url = `${this.apiUrl}/save`; // Assurez-vous que votre API a une route pour ajouter un redevable
    return this.http.post(url, newRedevable, { headers: this.getHeaders() });
  }
}
