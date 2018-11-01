import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioperdidoComponent } from './usuarioperdido.component';

describe('UsuarioperdidoComponent', () => {
  let component: UsuarioperdidoComponent;
  let fixture: ComponentFixture<UsuarioperdidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioperdidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioperdidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
