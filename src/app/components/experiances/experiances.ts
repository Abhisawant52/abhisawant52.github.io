import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
export interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  duration: string;
  experience: string;
  responsibilities: string[];
  skills: string[];
}
@Component({
  selector: 'app-experiances',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './experiances.html',
  styleUrl: './experiances.scss',
})
export class Experiances {
  title = 'Experience';

  experiences: Experience[] = [
    {
      title: 'Full Stack Developer',
      company: 'Datacomp Web Technology Pvt Ltd',
      companyUrl: 'https://www.datacompwebtech.com/',
      duration: 'Nov 2024 - Present',
      experience: '+ 10 months',
      responsibilities: [],
      skills: [
        'Angular js',
        'Flutter',
        'JavaScript',
        'Asp .net Core',
        'HTML & SCSS',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Vnnogile Solutions Pvt Ltd',
      companyUrl: 'https://www.vnnogile.com/#/home',
      duration: 'Nov 2021 - Nov 2024',
      experience: '3 years',
      responsibilities: [
        'Led various website and back-office projects for multiple brands, ensuring timely delivery and fostering team collaboration.',
        'Created an Angular web code generator to speed up development processes, optimizing workflow efficiency.',
        'Collaborated with frontend team to implement best practices, ensuring exceptional user experiences across projects.',
      ],
      skills: ['Angular js', 'Flutter', 'JavaScript', 'Nodejs', 'HTML & SCSS'],
    },
    {
      title: 'Assistant Developer',
      company: 'Ocufox Technology Pvt Ltd',
      companyUrl: 'https://ocufox.com/',
      duration: 'Jun 2021 - Nov 2021',
      experience: '6 months',
      responsibilities: [
        'Engaged in various development areas, including frontend, backend, and database management, gaining comprehensive skills.',
        'Utilized React and Nuxt frameworks proficiently to create dynamic user interfaces and enhance project functionality.',
      ],
      skills: [
        'Node.js',
        'Graphql',
        'Nuxt',
        'Vue.js',
        'JavaScript',
        'Tailwind',
      ],
    },
  ];
}
