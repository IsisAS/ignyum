import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import { ProblemComponent } from '../problem/problema.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProblemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
