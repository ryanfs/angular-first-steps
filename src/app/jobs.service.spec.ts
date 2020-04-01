import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobsService } from './jobs.service';

describe('JobsService', () => {
  let jobsService: JobsService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [JobsService],
      imports: [HttpClientTestingModule]
    });

    jobsService = TestBed.get(JobsService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  it(`should be created`, () => {
    expect(jobsService).toBeTruthy();
  });

  it(`hould make a GET request for jobs as an Observable`, async(inject([HttpTestingController, JobsService],
    (httpClient: HttpTestingController, jobsService: JobsService) => {

    const jobs = [
      {
        "id": 1,
        "title": "designer",
        "company": "Apple",
        "description": "great job!",
        "location": "USA"
      },
      {
        "id": 2,
        "title": "car maker",
        "company": "BMW",
        "description": "fun!",
        "location": "Germany"
      }
    ];
    jobsService.getJobs(1, 'test')
      .subscribe((jobs: any) => {
        expect(jobs.length).toBe(2);
      })

    let req = httpMock.expectOne('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=test');
    expect(req.request.method).toBe("GET");

    req.flush(jobs);
    httpMock.verify();

  })));
});
