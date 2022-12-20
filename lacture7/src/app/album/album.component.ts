import { Component, OnInit } from '@angular/core';
import { Album, AlbumService, Photo } from 'src/shared/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums: Album[];

  photos: Photo[];

  loading: boolean;
  currentAlbumId: number;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(d => {
      this.albums = d;
    })
  }

  getPhotos(albumId: number){
    this.loading = true;
    this.currentAlbumId = albumId;
    
    this.albumService.getPhotos(albumId).subscribe(d => {
      this.photos = d;
      this.loading = false;
    })
  }
}
