import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, inject, DestroyRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements OnInit {
  navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skill' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
  ];

  activeLink = signal(this.navItems[0].href);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  setActive(link: string) {
    this.activeLink.set(link);
  }

  private setupIntersectionObserver() {
    if (typeof window === 'undefined') return;

    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            this.activeLink.set(`#${id}`);
          }
        }
      });
    }, options);

    this.navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) {
        observer.observe(element);
      }
    });

    this.destroyRef.onDestroy(() => {
      observer.disconnect();
    });
  }
}
