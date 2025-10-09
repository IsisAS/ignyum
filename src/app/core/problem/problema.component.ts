import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
    trigger,
    style,
    animate,
    transition,
    state,
} from '@angular/animations';

@Component({
    selector: 'app-problem',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './problem.component.html',
    animations: [
        trigger('fadeSlideLeft', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(-60px)' }),
                animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
            ]),
        ]),
        trigger('fadeSlideRight', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(60px)' }),
                animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
            ]),
        ]),
        trigger('fadeUp', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(40px)' }),
                animate('1000ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
        ]),
    ],
})
export class ProblemComponent {

}