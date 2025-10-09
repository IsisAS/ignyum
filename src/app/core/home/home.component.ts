import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import { ProblemComponent } from '../problem/problem.component';
import { SolucaoComponent } from '../solucao/solucao.component';
import { ExperienciaSensorialComponent } from '../experiencia-sensorial/experiencia-sensorial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProblemComponent, SolucaoComponent, ExperienciaSensorialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
