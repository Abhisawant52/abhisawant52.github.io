import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-header',
  imports: [Navigation],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements AfterViewInit {
  email: string = 'abhisawant52.as@gmail.com';
  @ViewChild('animatedText') animatedText!: ElementRef;

  ngAfterViewInit(): void {
    this.startTyping();
  }

  Typer(text: string, Type: 'Write' | 'Erase', onCompletion: () => void) {
    let current_index = Type === 'Write' ? 0 : text.length - 1;

    const loop = () => {
      this.animatedText.nativeElement.innerHTML = text.substring(
        0,
        current_index
      );

      if (current_index === text.length && Type === 'Write') {
        setTimeout(onCompletion, 1500);
        return;
      }

      if (current_index === 0 && Type === 'Erase') {
        setTimeout(onCompletion, 0);
        return;
      }

      Type === 'Write' ? current_index++ : current_index--;
      setTimeout(loop, 150);
    };

    loop();
  }

  startTyping() {
    const texts = ['FullStack Developer', 'Coder', 'Programmer'];
    let currentIndex = 0;

    const typeNext = () => {
      this.Typer(texts[currentIndex], 'Write', () => {
        this.Typer(texts[currentIndex], 'Erase', () => {
          currentIndex = (currentIndex + 1) % texts.length; // Loop back to the start
          typeNext();
        });
      });
    };

    typeNext();
  }
}
