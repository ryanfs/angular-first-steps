import { TestBed, async } from '@angular/core/testing';
import { JobListComponent } from './job-list.component';
import { JobsService } from '../jobs.service';

describe('JobListComponent', () => {
  let component: JobListComponent;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JobListComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JobListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

// to do:
  // these tests are failing right now, 1. If 'mat-label' is an Angular component, then verify that it is part of this module
  // need to correctly import and export these material modules so Angular knows about them and can render them correctly during tests

  // it('should create the component', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should call getJobs on init', () => {
  //   const jobsService = TestBed.get(JobsService);
  //   const spyOnMethod = spyOn(jobsService, 'getJobs').and.callThrough();
  //   const fixture = TestBed.createComponent(JobListComponent);
  //   fixture.detectChanges();
  //   expect(spyOnMethod).toHaveBeenCalled();
  // });

});
