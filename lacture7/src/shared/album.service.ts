import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {


  public getAlbums(){
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  public getPhotos(albumId: number){
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  }

  constructor(private http: HttpClient) { }
}


export interface Album{
  userId: number;
  id: number;
  title: string;
}

export interface Photo{
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnail: string;
}