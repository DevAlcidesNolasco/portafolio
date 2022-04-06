import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnology',
  templateUrl: './tecnology.component.html',
  styleUrls: ['./tecnology.component.scss']
})
export class TecnologyComponent implements OnInit {

  @Input('tecnology') tecnology = {
    title: 'Tecnologias',
    image: 'none'
  };

  constructor() { }

  ngOnInit(): void { }

}
