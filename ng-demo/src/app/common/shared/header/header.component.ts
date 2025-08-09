import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  videoUrl: SafeResourceUrl;
  constructor( private sanitizer: DomSanitizer) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/watch?v=TO578cVRmpM'
  );
   }

  ngOnInit(): void {
  }

}
