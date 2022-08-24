import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fileVideo = '';
  constructor() { }

  ngOnInit(): void {
  }
  url:any;
  format:any;
  onSelectFile(event:any) {
    const file = event.target.files[0];
    console.log(file.name);
  
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      (file.type.indexOf('video')> -1);{
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
        const  formData=new FormData
        formData.append('video',file);
        
      }
    }
    
  }
  }
