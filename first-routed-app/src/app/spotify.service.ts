import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA6qLmF3GPlOIYzvslSwjUBT_zS4HXngHbuxngzlQXMf-eL0ppeECqEA1JcBY_SHvzmqWO3pxuE_Y3DgVKxzZ7R15TeHPFByTMgnWCxGt8gwMmElXwMj2sfhla_ku1WpSCkF4ypJ7CPRrDYH3zm3A2ElA'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
