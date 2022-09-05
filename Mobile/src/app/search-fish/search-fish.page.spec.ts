import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchFishPage } from './search-fish.page';

describe('SearchFishPage', () => {
  let component: SearchFishPage;
  let fixture: ComponentFixture<SearchFishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
