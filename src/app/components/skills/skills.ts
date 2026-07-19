import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  title = 'What I Do';
  description = 'From D to D - Design, Development and Deployment';

  skills = [
    { name: 'HTML', icon: './tech_icon/html-5-svgrepo-com.svg' },
    { name: 'CSS', icon: './tech_icon/css-3-svgrepo-com.svg' },
    {
      name: 'JavaScript',
      icon: './tech_icon/javascript-svgrepo-com.svg',
    },
    {
      name: 'TypeScript',
      icon: './tech_icon/typescript-svgrepo-com.svg',
    },
    { name: 'Flutter', icon: './tech_icon/flutter-svgrepo-com.svg' },
    {
      name: 'Angular',
      icon: './tech_icon/angular-icon-svgrepo-com.svg',
    },
    { name: 'React', icon: './tech_icon/react-svgrepo-com.svg' },
    {
      name: 'Nodejs',
      icon: './tech_icon/nodejs-icon-logo-svgrepo-com.svg',
    },
    { name: 'Sass', icon: './tech_icon/sass-svgrepo-com.svg' },
    { name: 'Git', icon: './tech_icon/git-svgrepo-com.svg' },
    { name: 'Mysql', icon: './tech_icon/mysql-logo-svgrepo-com.svg' },
    { name: 'MongoDB', icon: './tech_icon/mongodb-svgrepo-com.svg' },
  ];
}
