import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {
  isActive: boolean | undefined;

  openEmailClient() {
    this.isActive = false;
    window.location.href = 'mailto:hersonic82@gmail.com';
    this.isActive = !this.isActive;
    document.body.classList.toggle('no-scroll', this.isActive);    
  }

  openWhatsApp() {
    this.isActive = false;
    window.open('https://wa.me/5511980006587', '_blank');
    this.isActive = !this.isActive;
    document.body.classList.toggle('no-scroll', this.isActive);    
  }
}
