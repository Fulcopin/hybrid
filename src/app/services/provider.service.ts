import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private URL: string = 'https://final-4de40-default-rtdb.firebaseio.com/collection.json';

  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
  }

  postResponse(data: any) {
    return this.http.post(this.URL, data);
  }
}
