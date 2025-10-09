import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-experiencia-sensorial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia-sensorial.component.html',
  styleUrls: ['./experiencia-sensorial.component.scss']
})
export class ExperienciaSensorialComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    // Inicializar AOS para animações
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }

  ngOnDestroy(): void {
    // Cleanup AOS
    AOS.refresh();
  }
}