import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  title = 'About';
  aboutPoints = [
    'I’m a web developer based in Mumbai, India. I graduated with a Master in Information Technology. Welcome to my place of passion. I learn something new every day as there is so much yet to learn.',
    'Experienced Front End Developer with a strong background in front-end design and development, boasting 3 years of hands-on experience.',
    'Skilled in JavaScript, HTML, and CSS, with a proven track record of leading teams in the development of tools that streamline project workflows, enhance client satisfaction, and elevate user experience.',
    'Specializing in responsive design, I am proficient in HTML5, CSS3, JavaScript, and modern frameworks like React and Angular.',
  ];
}
