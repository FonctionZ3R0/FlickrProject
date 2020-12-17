import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlickrgetService {

  constructor(private http: HttpClient) { }

  api_key = "1e69c0fd262edb5b64e719dbd6be3fa3";
  api_sig = "d7e0aafb6112f96a"
  getimages(text): Observable<any>{
    return this.http.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+this.api_key+"&text="+text+"&format=json&nojsoncallback=1");
  }

  getimage(photoID): Observable<any>{
    return this.http.get("https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key="+this.api_key+"&photo_id="+photoID+"&format=json&nojsoncallback=1");
  }

  getSize(photoID): Observable<any>{
    return this.http.get("https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key="+this.api_key+"&photo_id="+photoID+"&format=json&nojsoncallback=1");
  }
}
