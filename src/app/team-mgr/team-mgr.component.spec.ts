import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMgrComponent } from './team-mgr.component';

describe('TeamMgrComponent', () => {
  let component: TeamMgrComponent;
  let fixture: ComponentFixture<TeamMgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMgrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
