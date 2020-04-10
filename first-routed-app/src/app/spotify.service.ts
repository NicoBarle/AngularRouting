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
        'Bearer BQAjvtevPCrcJNhymbCcC4AoEjs_p-K3OJw3IrDdM_eoSXI-Zsd05Cpbc88vElxWe6dzMvJ1BbsNqFz9-4ykBiwx350-hCH4lI_lZUr29fN0t0LUTLkLPVtTbdiLJW7rVftMVW-jcoL9xaUXIWfmf9wp_A'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  getTrack(id: string) {

    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAjvtevPCrcJNhymbCcC4AoEjs_p-K3OJw3IrDdM_eoSXI-Zsd05Cpbc88vElxWe6dzMvJ1BbsNqFz9-4ykBiwx350-hCH4lI_lZUr29fN0t0LUTLkLPVtTbdiLJW7rVftMVW-jcoL9xaUXIWfmf9wp_A'
    });

    return this.http.get(url, { headers });
  }

}
