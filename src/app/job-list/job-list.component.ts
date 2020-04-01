import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html'
})
export class JobListComponent {
  allJobs = []
  jobs = [];
  page = 1;
  resultsPerPage = 5;
  errorMessage = '';
  searchTerm = '';

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.getJobResults()
  }

  search() {
    this.getJobResults()
  }

  getJobResults() {
    this.jobs = [];
    this.jobsService.getJobs(this.page, this.searchTerm)
      .subscribe((data: any[]) => {
        this.allJobs = data;
        this.jobs = this.allJobs.slice(0, this.resultsPerPage)
    }, (error) => {
      this.errorMessage = 'GitHub Jobs API is currently unavailable, please try again.'
    })
  }

  navigate(direction) {
    if (direction === 'next' && this.page) {
      this.page++
    }
    if (direction === 'prev') {
      this.page--
    }
    this.jobs = this.allJobs.slice(this.resultsPerPage * (this.page - 1), this.resultsPerPage * this.page)
  }
}
