import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, viewChild, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  private aside!: HTMLElement;

  constructor(
    private renderer: Renderer2, private el: ElementRef
  ){}


   ngOnInit(): void {
    // Dapatkan elemen aside setelah tampilan selesai
    // this.aside = this.el.nativeElement.ownerDocument.querySelector('#aside');

    // if (!this.aside) {
    //   console.error('Element with id #aside not found');
    //   return;
    // }

    // // Tambahkan event listener untuk klik di window
    // this.renderer.listen('window', 'click', (event: Event) => {
    //   const target = event.target as HTMLElement;

    //   // Pastikan klik tidak terjadi di dalam sidebar atau elemen terkait
    //   if (!this.aside.contains(target)) {
    //     this.toggleClose();
    //     console.log('Clicked outside the sidebar');
    //   }
    // });
  }

  toggleClose():void {
    const aside = this.el.nativeElement.ownerDocument.querySelector('#aside');

    this.renderer.addClass(aside, '-translate-x-80')
    this.renderer.removeClass(aside, 'sidebarOpen')
    
  }
  
}
