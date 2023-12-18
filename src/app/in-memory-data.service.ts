import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      {id: 1, name:"movie 1",description:"The Dark Knight",imageUrl:"darkKnight.jpg"},
      {id: 2, name:"movie 2",description:"Interstellar",imageUrl:"interstellar.jpg"},
      {id: 3, name:"movie 3",description:"The Dark Knight Rises",imageUrl:"darkKnightRises.jpg"},
      {id: 4, name:"movie 4",description:"Batman Begins",imageUrl:"batmanBegins.jpg"},
      {id: 5, name:"movie 5",description:"Oppenheimer",imageUrl:"oppenheimer.jpg"},
      {id: 6, name:"movie 6",description:"Inception",imageUrl:"inception.jpg"},
      {id: 7, name:"movie 7",description:"The Prestige",imageUrl:"prestige.jpg"},
  
  ];
  return { movies };
  }

  constructor() { }
}
