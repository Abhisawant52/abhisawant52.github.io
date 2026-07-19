import { Component, afterNextRender } from '@angular/core';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experiances } from './components/experiances/experiances';
import { Projects } from './components/projects/projects';
import { Header } from './components/header/header';
import { Links } from './components/links/links';

declare var AOS: any;

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Links,
    About,
    Skills,
    Experiances,
    Projects,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Abhisawant_portfolio';

  constructor() {
    afterNextRender(() => {
      if (typeof window !== 'undefined' && (window as any).AOS) {
        (window as any).AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-quad',
        });
      }
    });
  }
}
