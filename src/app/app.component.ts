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
  imgOrigin = "";
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

              var img = document.createElement("img");

              img.setAttribute("src","https://live.staticflickr.com/"+server+"/"+id+"_"+secret+".jpg");
              img.style.borderRadius = "12px";
              img.style.margin = "10px";
              img.style.boxShadow = "0 0 10px gray";
              img.style.width = "100%";
              img.style.opacity = "0";
              img.style.transition = "all 0.5s ease";
              img.style.position = "relative";
              img.style.bottom = "0px";

              img.addEventListener("pointerover", e => {
                img.style.bottom = "10px";
                img.style.boxShadow = "0 10px 10px gray";
              })
              img.addEventListener("pointerout", e => {
                img.style.bottom = "0px";
                img.style.boxShadow = "0 0 10px gray";
              })
              img.addEventListener("click", e => {
                img.parentElement.style.filter = "blur(10px)";
                document.querySelector(".blurrer").setAttribute("style","display: block");
                document.querySelector(".original").setAttribute("style","display: block");
                this.flickrget.getSize(element["id"]).subscribe(data3 =>{
                  let Original = data3["sizes"]["size"].pop();
                  while (Original["media"] == "video"){
                    Original = data3["sizes"]["size"].pop();
                  }
                  this.imgOrigin = Original["source"];
                })
              })

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

  onBlurrerClick(event){
    document.querySelector(".images").setAttribute("style","filter: unset")
    event.target.style.display = "none";
    event.target.nextElementSibling.firstElementChild.style.display = "none";
    this.imgOrigin = "";

  }

  resise(event){
    if (event.target.style.height == "") {
      event.target.style.height = "unset";
      event.target.style.maxWidth = "100%";
      event.target.style.maxHeight = "unset";
    }else{
      event.target.style.height = "";
      event.target.style.maxWidth = "";
      event.target.style.maxHeight = "";
    }
    
  }
}