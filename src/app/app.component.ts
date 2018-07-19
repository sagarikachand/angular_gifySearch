import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  gifis=[];
  

  constructor(private http:Http){}

  performSearch(searchTerm){
    var apiLink= this.link+searchTerm.value;
    
    this.http.request(apiLink)
     .subscribe((response:Response)=>{
       this.gifis=response.json().data;
       console.log(response.json());
     })
  }
}
