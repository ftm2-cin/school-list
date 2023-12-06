import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
  
export interface School {
  nuAnoCenso: number;
  coEntidade: number;
  noEntidade: string;
  tpDependencia: number;
  rede: string;
  localizacao: string;
  noRegiao: string;
  coUf: number;
  sgUf: string;
  coMunicipio: number;
  noMunicipio: string;
  coCep: number;
  dsEndereco: string;
  nuEndereco: number;
  dsComplemento: string;
  noBairro: string;
  nuDdd: number;
  nuTelefone: number;
  nuTelefonePublico: number;
  nuFax: number;
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://157.230.55.217/api/escolas';

  constructor(private http: HttpClient) { }

  public getSchools(): Observable<School[]> {
    return this.http.get<School[]>(this.apiUrl);
  }

  public getSchoolBycoEntidade(id: number): Observable<School | undefined> {
    return this.getSchools().pipe(
      map(schools => schools.find(school => school.coEntidade === id))
    );
  }

  public searchSchool(query: string): Observable<School[]> {
    const sanitizedQuery = query.toLowerCase().trim();

    if (!sanitizedQuery) {
      return this.getSchools(); // Return all schools if the query is empty
    }

    const url = `${this.apiUrl}/search?q=${sanitizedQuery}`;
    return this.http.get<School[]>(url);
  }
}