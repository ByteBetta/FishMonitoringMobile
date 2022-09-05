import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserClassService } from '../services/user-class.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  @Input() data: any;
  @Output() onFinish = new EventEmitter();
  @Output() onNext = new EventEmitter();
  @Output() onPrevious = new EventEmitter();

  @ViewChild('wizardSlider', {static: false}) slider;

  sliderOptions = { pager: true };
  viewEntered = true;
  prev = false;
  next = true;
  ignoreDidChange = false;
  
 
  constructor(private UserService: UserClassService, private router: Router) 
  { 

  }
  
  ngOnInit() {
    this.data = {
      'toolbarTitle': 'Simple + icon',
      "btnPrev": "Previous",
      "btnNext": "Next",
      "btnFinish": "Finish",
      "items": [
        {
          "logo": "assets/imgs/logo/1.png",
          "title": "Welcome to BFAR Fish Monitoring System",
          "description": "Just Simply Fill up the and Submit the Form and it will be directly send to BFAR Database"
        },
        {
          "logo": "assets/imgs/logo/2.png",
          "title": "For Enumerators",
          "description": "Save papers from priting form. Faster Data Transmission."
        },
        {
          "logo": "assets/imgs/logo/3.png",
          "title": "For Data Encoder",
          "description": "No more Encoding Data to Microsoft Excel. Easy to Generate Reports"
        }
      ]
    };  
  }



  ngAfterViewInit() {
    this.viewEntered = true;
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
    this.ionSlideReachStart();
  }

  onFinishFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onFinish.emit();
    this.UserService.setFirstOpened();
    this.router.navigate(['/login']); 
  }

  onNextFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onNext.emit();
    this.slider.slideNext(300);
  }

  onPreviousFunc() {
    this.onPrevious.emit();
    this.slider.slidePrev(300);

    
  }

  ionSlideReachStart() {
    this.prev = false;
    this.next = true;
    this.ignoreDidChange = true;
  }

  ionSlideReachEnd() {
    this.prev = true;
    this.next = false;
    this.ignoreDidChange = true;
  }

  ionSlideDidChange() {
    if (this.ignoreDidChange) {
      this.ignoreDidChange = false;
    } else {
      this.prev = true;
      this.next = true;
    }
  }

}
