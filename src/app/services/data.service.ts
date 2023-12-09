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

  constructor(private http: HttpClient) {}

  getSchools(page: number): Observable<School[]> {
    const url = `${this.apiUrl}?page=${page}`; // Update with your API endpoint
    return this.http.get<School[]>(url);
  }

  public getSchoolBycoEntidade(id: number): Observable<School | undefined> {
    const apiUrl = `http://157.230.55.217/api/escolas?coEntidade=${id}`;

    return this.http.get<School[]>(apiUrl).pipe(
      map((schools) => (schools.length > 0 ? schools[0] : undefined))
    );
  }

  public getSchoolDetailsBycoEntidade(id: number): Observable<School | undefined> {
    const url = `${this.apiUrl}/${id}`; // Assuming your API supports fetching details by ID
    return this.http.get<School>(url);
  }
}