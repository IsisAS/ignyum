import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;

  ngAfterViewInit() {
    // Adiciona funcionalidade de scroll ao carrossel
    this.setupCarouselScroll();
  }

  private setupCarouselScroll() {
    // Adiciona a função scrollCarousel ao window para ser acessível pelo HTML
    (window as any).scrollCarousel = (direction: number) => {
      const carousel = document.querySelector('.produtos-carousel') as HTMLElement;
      if (carousel) {
        const scrollAmount = 300; // pixels para rolar
        carousel.scrollBy({
          left: direction * scrollAmount,
          behavior: 'smooth'
        });
      }
    };
  }
}