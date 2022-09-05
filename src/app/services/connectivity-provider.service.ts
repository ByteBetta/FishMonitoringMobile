import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable, fromEvent, merge, of} from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { Network } from '@ionic-native/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class ConnectivityProviderService {
  public appIsOnline$: Observable<boolean>;
 

  constructor(private platform: Platform, private network: Network) {
    this.checkInternetFunc();
   }

   
   checkInternetFunc() {
    if (!window || !navigator || !('onLine' in navigator)) return;

    this.appIsOnline$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    ).pipe(map(() => navigator.onLine))

  }
  }


