import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaMultiplaComponent } from './busca-multipla.component';

describe('BuscaMultiplaComponent', () => {
  let component: BuscaMultiplaComponent;
  let fixture: ComponentFixture<BuscaMultiplaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaMultiplaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaMultiplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
