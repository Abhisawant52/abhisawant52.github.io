import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './links.html',
  styleUrl: './links.scss',
})
export class Links {
  socialLinks = [
    {
      url: 'https://github.com/Abhisawant52',
      icon: 'social_media/github.svg',
      alt: 'GitHub',
    },
    {
      url: 'https://www.linkedin.com/in/abhisheksawant52/',
      icon: 'social_media/linkedin.svg',
      alt: 'LinkedIn',
    },
    {
      url: 'https://www.instagram.com/abhi_sawant52/',
      icon: 'social_media/instagram.svg',
      alt: 'Instagram',
    },
    {
      url: 'https://www.facebook.com/profile.php?id=100006130181720',
      icon: 'social_media/facebook.svg',
      alt: 'Facebook',
      size: { width: '26px', height: '26px' },
    },
    {
      url: 'mailto:abhisawant52.as@gmail.com',
      icon: 'social_media/gmail.svg',
      alt: 'Gmail',
      size: { width: '28px', height: '28px' },
    },
  ];
}
