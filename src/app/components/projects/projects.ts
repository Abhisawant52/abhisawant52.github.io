import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
export interface Project {
  title: string;
  link: string;
  image: string;
  description: string;
  technologies: string[];
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  title = 'Projects';

  projects: Project[] = [
    {
      title: 'Tim Hortons India',
      link: 'https://timhortonsindia.com/',
      image: './projects/timhortons.png',
      description:
        'SSR application for Tim Hortons India. Integrated Google map displays for store location.',
      technologies: ['Angular Js', 'SSR', 'JavaScript'],
    },
    // Add more project objects here
  ];
}
