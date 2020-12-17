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
    if (event.target.selectionEnd >= 3) {
      if (event.keyCode == 13) {
        document.querySelector(".images").innerHTML = "";
        event.target.parentElement.setAttribute("class","background toTop");
        event.target.nextElementSibling.style.opacity = "0";
        event.target.blur();
        this.flickrget.getimages(event.target.value.replace(' ','+')).subscribe(data =>{
          this.images = data;
          this.images["photos"]["photo"].forEach(element =>{
            this.flickrget.getimage(element["id"]).subscribe(data2 =>{

              let server = data2["photo"]["server"];
              let id = data2["photo"]["id"];
              let secret = data2["photo"]["secret"];

              let img = document.createElement("img");

              img.setAttribute("src","https://live.staticflickr.com/"+server+"/"+id+"_"+secret+".jpg");
              img.style.borderRadius = "12px";
              img.style.margin = "10px";
              img.style.boxShadow = "0 0 10px Black";
              img.style.width = "100%";
              img.style.opacity = "0";
              img.style.transition = "opacity 1s ease";

              document.querySelector(".images").appendChild(img);
              setTimeout(() => {
                img.style.opacity = "1";
              }, 1000);

            })
          });
        })
      }
    }
  }
}