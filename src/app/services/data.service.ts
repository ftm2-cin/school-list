import { Injectable } from '@angular/core';

export interface School {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public schools: School[] = [
    {
      fromName: 'DAMAS',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'CBV',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'MARISTA',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'NUCLEO',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'POLI',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'UFPE',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'UFRPE',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'SAO BENTO',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  constructor() { }

  public getSchools(): School[] {
    return this.schools;
  }

  public getSchoolById(id: number): School {
    return this.schools[id];
  }

  public searchSchool(query: string): School[] {
    const sanitizedQuery = query.toLowerCase().trim();

    if (!sanitizedQuery) {
      return this.schools; // Return all schools if the query is empty
    }

    return this.schools.filter(school => {
      // Customize the properties you want to include in the search
      const searchableContent = `${school.fromName.toLowerCase()} ${school.subject.toLowerCase()} ${school.date.toLowerCase()}`;
      
      return searchableContent.includes(sanitizedQuery);
    });
  }
}
