import { Component, OnInit } from '@angular/core';
import { UserClassService } from '../services/user-class.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  
  constructor(
    private userService: UserClassService
  ) {
   
    
   }
  

  async ngOnInit() {
    const toggle = document.querySelector('#themeToggle') as HTMLIonToggleElement;
    this.userService.getUserpreference().then(data => {
      toggle.checked = data;
    })
   
    
  }

  async ngAfterViewInit() {
   

   // Query for the toggle that is used to change between themes
    const toggle = document.querySelector('#themeToggle') as HTMLIonToggleElement;

    // Listen for the toggle check/uncheck to toggle the dark class on the <body>
    toggle.addEventListener('ionChange', (ev) => {
      document.body.classList.toggle('dark', (<any>ev).detail.checked);
      this.userService.userpreference((<any>ev).detail.checked)

    });


   
 

}

 
}


