import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  title: String = 'Social Auth';
  subtitle: String = 'Subtitle';

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
