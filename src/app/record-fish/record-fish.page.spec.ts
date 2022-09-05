import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordFishPage } from './record-fish.page';

describe('RecordFishPage', () => {
  let component: RecordFishPage;
  let fixture: ComponentFixture<RecordFishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordFishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordFishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
