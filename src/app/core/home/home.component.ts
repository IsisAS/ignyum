import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import { ProblemComponent } from '../problem/problem.component';
import { SolucaoComponent } from '../solucao/solucao.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProblemComponent, SolucaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
