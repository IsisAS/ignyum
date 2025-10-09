import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-solucao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solucao.component.html',
  styleUrls: ['./solucao.component.scss']
})
export class SolucaoComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  }

  ngOnDestroy(): void {
    // Limpar AOS ao destruir o componente
    AOS.refresh();
  }
}