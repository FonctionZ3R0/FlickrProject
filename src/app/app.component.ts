import { Component } from '@angular/core';

import {FlickrgetService} from "./flickrget.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FlickrProject';
  images = [];
  constructor(private flickrget : FlickrgetService) { }

  onInputChange(event){
    if (event.target.selectionEnd > 3) {
      if (event.keyCode == 13) {
        this.flickrget.getimages(event.target.value.replace(' ','+')).subscribe(data =>{
          console.log(data)
          this.images = data;
          event.target.value = '';
          this.images["photos"]["photo"].forEach(element =>{
            this.flickrget.getimage(element["id"]).subscribe(data =>{
              let server = data["photo"]["server"];
              let id = data["photo"]["id"];
              let secret = data["photo"]["secret"];
              console.log("https://live.staticflickr.com/"+server+"/"+id+"_"+secret+".jpg");
              let img = document.createElement("img");
              img.setAttribute("src","https://live.staticflickr.com/"+server+"/"+id+"_"+secret+".jpg");
              document.querySelector(".images").appendChild(img);
            })
          });
        })
      }
    }
  }
}