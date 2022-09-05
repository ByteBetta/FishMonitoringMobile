import { Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserClassService } from 'src/app/services/user-class.service';

@Component({
  selector: 'cs-profile-layout-5',
  templateUrl: 'profile-layout-5.page.html',
  styleUrls: ['profile-layout-5.page.scss'],
})
export class ProfileLayout5Page implements OnChanges, AfterViewInit {
  profile: Observable<User>;

  @Input() data: any;

  @Output() onFacebook = new EventEmitter();
  @Output() onTwitter = new EventEmitter();
  @Output() onInstagram = new EventEmitter();

  description: String;
  index = 0;

  viewEntered = false;

  constructor(userService : UserClassService) {
      userService.setUpUser().then(() => {
      if (userService.userId !== undefined) {
        this.profile = userService.getMe();
      } else {
        console.log('No user found');
      }
    });
   }

  ngAfterViewInit() {
    this.viewEntered = true;    
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onFacebookFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onFacebook.emit(item);
  }

  onTwitterFunc(item, event) {
    if (event) {
      event.stopPropagation();
    }
    this.onTwitter.emit(item);
  }

  onInstagramFunc(item, event) {
    if (event) {
      event.stopPropagation();
    }
    this.onInstagram.emit(item);
  }



}
