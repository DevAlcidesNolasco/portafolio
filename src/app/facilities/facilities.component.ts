import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
  public lists = [
    {
      title: 'Plataformas',
      array: [
        {
          title: 'Web',
          image: 'world-wide-web-clipart 1.svg'
        },
        {
          title: 'Android',
          image: '1567553416wpdm_android-logo 1.svg'
        }
      ]
    },
    {
      title: 'Lenguajes',
      array: [
        {
          title: 'JavaScript',
          image: 'Unofficial_JavaScript_logo_2 1.svg'
        },
        {
          title: 'TypeScript',
          image: 'Typescript_logo_2020 2.svg'
        },
        {
          title: 'Php',
          image: 'new-php-logo 2.svg'
        },
        {
          title: 'Python',
          image: 'python-seeklogo.com 1.svg'
        }
      ]
    },
    {
      title: 'Frameworks',
      array: [
        {
          title: 'Ionic',
          image: 'Ionic_Logo 2.svg'
        },
        {
          title: 'Angular',
          image: 'angular-icon 2.svg'
        },
        {
          title: 'ExpressJS',
          image: 'expressjs-icon 1.svg'
        },
        {
          title: 'NodeJS',
          image: 'nodejs-icon 2.svg'
        }
      ]
    },
    {
      title: 'Diseños',
      array: [
        {
          title: 'Figma',
          image: 'figma-1 1.svg'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
