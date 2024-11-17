import { Component, ElementRef, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { EventEmitter } from 'stream';
declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private renderer: Renderer2, private el: ElementRef
  ) { }

  ngOnInit(): void {
    

  }


  toggleSidebar() {
    const aside = this.el.nativeElement.ownerDocument.querySelector('#aside');

    if (aside) {
      this.renderer.removeClass(aside, '-translate-x-80')
      this.renderer.addClass(aside, 'sidebarOpen')
    }

    

  }
}
