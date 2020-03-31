import { Component, OnInit } from '@angular/core';
// import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  // styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  jobs = []

  // constructor(private jobsService: JobsService) { }

  ngOnInit() {
    // console.log(15, this.JobsService)

    // this.jobsService.getGithubJobs().subscribe((data: any[])=>{
    //   console.log(17, data);
    //   this.jobs = data;
    // })
  }

  share() {
    window.alert('The job has been shared!');
  }

}
