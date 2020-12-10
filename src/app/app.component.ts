import { Component } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

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
          this.images = data;
          event.target.value = '';
          this.images["photos"]["photo"].forEach(element =>{
            this.flickrget.getimage(element["id"]).subscribe(data =>{
              let server = data["photo"]["server"];
              let id = data["photo"]["id"];
              let secret = data["photo"]["secret"];
              let img = document.createElement("img");
              img.setAttribute("src","https://live.staticflickr.com/"+server+"/"+id+"_"+secret+".jpg");
              img.style.borderRadius = "12px";
              img.style.margin = "10px";
              img.style.boxShadow = "0 0 10px Black";
              img.style.width = "100%";
              img.style.opacity = "0";
              img.style.transition = "opacity 2s ease";

              document.querySelector(".images").appendChild(img);
              setTimeout(() => {
                img.style.opacity = "1";
              }, 2000);

            })
          });
        })
      }
    }
  }
}