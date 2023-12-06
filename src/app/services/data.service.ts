import { Injectable } from '@angular/core';
  
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
  public schools: School[] = [
    {
      nuAnoCenso: 2021,
      coEntidade: 1104601,
      noEntidade: "COLEGIO AGAPE",
      tpDependencia: 4,
      rede: "Privada",
      localizacao: "Urbana",
      noRegiao: "Norte",
      coUf: 11,
      sgUf: "RO",
      coMunicipio: 1100023,
      noMunicipio: "Ariquemes",
      coCep: 76872847,
      dsEndereco: "AVENIDA JUSCELINO KUBITSCHEK",
      nuEndereco: 3349,
      dsComplemento: "",
      noBairro: "SETOR INSTITUCIONAL",
      nuDdd: 69,
      nuTelefone: 35363561,
      nuTelefonePublico: 0,
      nuFax: 0,
      latitude: -9.9010206,
      longitude: -63.0321854
    },
    {
      nuAnoCenso: 2021,
      coEntidade: 11046023,
      noEntidade: "GGE",
      tpDependencia: 4,
      rede: "Privada",
      localizacao: "Urbana",
      noRegiao: "Norte",
      coUf: 11,
      sgUf: "RO",
      coMunicipio: 1100023,
      noMunicipio: "Ariquemes",
      coCep: 76872847,
      dsEndereco: "AVENIDA JUSCELINO KUBITSCHEK",
      nuEndereco: 3349,
      dsComplemento: "",
      noBairro: "SETOR INSTITUCIONAL",
      nuDdd: 69,
      nuTelefone: 35363561,
      nuTelefonePublico: 0,
      nuFax: 0,
      latitude: -9.9010206,
      longitude: -63.0321854
    },
    {
      nuAnoCenso: 2021,
      coEntidade: 11046023,
      noEntidade: "COLEGIO",
      tpDependencia: 4,
      rede: "Privada",
      localizacao: "Urbana",
      noRegiao: "Norte",
      coUf: 11,
      sgUf: "RO",
      coMunicipio: 1100023,
      noMunicipio: "Ariquemes",
      coCep: 76872847,
      dsEndereco: "AVENIDA JUSCELINO KUBITSCHEK",
      nuEndereco: 3349,
      dsComplemento: "",
      noBairro: "SETOR INSTITUCIONAL",
      nuDdd: 69,
      nuTelefone: 35363561,
      nuTelefonePublico: 0,
      nuFax: 0,
      latitude: -9.9010206,
      longitude: -63.0321854
    },
    {
      nuAnoCenso: 2021,
      coEntidade: 11046023,
      noEntidade: "DAMAS",
      tpDependencia: 4,
      rede: "Privada",
      localizacao: "Urbana",
      noRegiao: "Norte",
      coUf: 11,
      sgUf: "RO",
      coMunicipio: 1100023,
      noMunicipio: "CBV",
      coCep: 76872847,
      dsEndereco: "AVENIDA JUSCELINO KUBITSCHEK",
      nuEndereco: 3349,
      dsComplemento: "",
      noBairro: "SETOR INSTITUCIONAL",
      nuDdd: 69,
      nuTelefone: 35363561,
      nuTelefonePublico: 0,
      nuFax: 0,
      latitude: -9.9010206,
      longitude: -63.0321854
    },
    {
      nuAnoCenso: 2021,
      coEntidade: 11046023,
      noEntidade: "NUCLEO",
      tpDependencia: 4,
      rede: "Privada",
      localizacao: "Urbana",
      noRegiao: "Norte",
      coUf: 11,
      sgUf: "RO",
      coMunicipio: 1100023,
      noMunicipio: "Ariquemes",
      coCep: 76872847,
      dsEndereco: "AVENIDA JUSCELINO KUBITSCHEK",
      nuEndereco: 3349,
      dsComplemento: "",
      noBairro: "SETOR INSTITUCIONAL",
      nuDdd: 69,
      nuTelefone: 35363561,
      nuTelefonePublico: 0,
      nuFax: 0,
      latitude: -9.9010206,
      longitude: -63.0321854
    },
    {
      nuAnoCenso: 2021,
      coEntidade: 11046023,
      noEntidade: "COG",
      tpDependencia: 4,
      rede: "Privada",
      localizacao: "Urbana",
      noRegiao: "Norte",
      coUf: 11,
      sgUf: "RO",
      coMunicipio: 1100023,
      noMunicipio: "Ariquemes",
      coCep: 76872847,
      dsEndereco: "AVENIDA JUSCELINO KUBITSCHEK",
      nuEndereco: 3349,
      dsComplemento: "",
      noBairro: "SETOR INSTITUCIONAL",
      nuDdd: 69,
      nuTelefone: 35363561,
      nuTelefonePublico: 0,
      nuFax: 0,
      latitude: -9.9010206,
      longitude: -63.0321854
    }
  ];

  constructor() { }

  public getSchools(): School[] {
    return this.schools;
  }

  public getSchoolBycoEntidade(id: number): School | undefined {
    return this.schools.find(school => school.coEntidade === id) || undefined;
  }
  

  public searchSchool(query: string): School[] {
    const sanitizedQuery = query.toLowerCase().trim();

    if (!sanitizedQuery) {
      return this.schools; // Return all schools if the query is empty
    }

    return this.schools.filter(school => {
      // Customize the properties you want to include in the search
      const searchableContent = `${school.noEntidade.toLowerCase()} ${school.coEntidade}`;
      
      return searchableContent.includes(sanitizedQuery);
    });
  }
}
