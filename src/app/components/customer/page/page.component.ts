import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  title: string = "Your Customer Base"
  constructor() { }

  ngOnInit(): void {
  }

}
