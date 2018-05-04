import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CarPartComponent} from "./car-part.component";



describe('CarPartComponent', () => {
  let component: CarPartComponent;
  let fixture: ComponentFixture<CarPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
