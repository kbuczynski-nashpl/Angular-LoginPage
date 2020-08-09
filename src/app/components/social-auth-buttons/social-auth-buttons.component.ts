import { Component, Input, OnInit }                               from '@angular/core';
import { faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

@Component(
  {
    selector:    'social-auth-buttons',
    templateUrl: './social-auth-buttons.component.html',
    styleUrls:   ['./social-auth-buttons.component.scss']
  }
)
export class SocialAuthButtonsComponent implements OnInit {
  @Input() name: string;
  hover: boolean;

  faGoogle    = faGoogle;
  faTwitter   = faTwitter
  faGithub    = faGithub;
  faLinkedIn  = faLinkedin;
  faInstagram = faInstagram;

  constructor() {
  }

  ngOnInit(): void {
    this.hover = false;
  }

  /**
   * Change hover on single element
   *
   * @param event
   */
  changeHover(event): void {
    this.hover    = event.type == 'mouseover';
    const element = event.target;

    if (element.classList.contains('mat-button-wrapper')) {
      return;
    }

    if (this.hover) {
      element.classList.remove('mat-elevation-z4');
      element.classList.add('mat-elevation-z12');

      return;
    }

    element.classList.remove('mat-elevation-z12');
    element.classList.add('mat-elevation-z4');
  }

}
