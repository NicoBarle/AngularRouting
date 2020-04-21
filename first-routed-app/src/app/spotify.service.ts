import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({Authorization: environment.oauthToken});

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
        'Bearer BQDVFMxk_BoElPf31MfNP-LbHeoesRYpRhRY9rWQj2vIVdwB2RnHwtH8EK98ut4J47fQ_aHN3cR04CirjPC2g_Amr4o7Fc12om8fOzU7tE1KnYEuGw3LpuWW3QpJFlROEssObf9wMWXhWtLg7ewvJmFtWw'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  getTrack(id: string) {

    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDVFMxk_BoElPf31MfNP-LbHeoesRYpRhRY9rWQj2vIVdwB2RnHwtH8EK98ut4J47fQ_aHN3cR04CirjPC2g_Amr4o7Fc12om8fOzU7tE1KnYEuGw3LpuWW3QpJFlROEssObf9wMWXhWtLg7ewvJmFtWw'
    });

    return this.http.get(url, { headers });
  }

  getArtist(id: string) {

    const url = `https://api.spotify.com/v1/artist/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDVFMxk_BoElPf31MfNP-LbHeoesRYpRhRY9rWQj2vIVdwB2RnHwtH8EK98ut4J47fQ_aHN3cR04CirjPC2g_Amr4o7Fc12om8fOzU7tE1KnYEuGw3LpuWW3QpJFlROEssObf9wMWXhWtLg7ewvJmFtWw'
    });

    return this.http.get(url, { headers });
  }

  getAlbum(id: string) {

    const url = `https://api.spotify.com/v1/album/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDVFMxk_BoElPf31MfNP-LbHeoesRYpRhRY9rWQj2vIVdwB2RnHwtH8EK98ut4J47fQ_aHN3cR04CirjPC2g_Amr4o7Fc12om8fOzU7tE1KnYEuGw3LpuWW3QpJFlROEssObf9wMWXhWtLg7ewvJmFtWw'
    });

    return this.http.get(url, { headers });
  }
}
