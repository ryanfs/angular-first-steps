## User Stories
[x] As a user of the web app I can view a paginated list of job postings from GitHub's API so that I can know what jobs are currently available
[x] As a user of the web app I can search the description of job postings from GitHub's API the kind of job's I am looking for
[x] As a user of the web app I can click on a job posting from GitHub's API So that I can view more details about the position


##Follow Up Questions

#What libraries did you use? Why did you use them?
- Google material design framework for styles and components like the spinner and accordion panels
- HttpClientModule for the GET request to the api
- Karma for unit testing

#If you had more time, what further improvements or new features would you add?
- Get the job-list component tests working (right now the material components are throwing errors because of import/export issues with Karma)
- I would break job-list component into a few smaller components and directives
- I'd set up a server and connect to the github api via a secure server connection
- I'd create my own api layer (on top of what github gives back) with an interface specific to the front end
- Add limits logic to the prev/next buttons (sense when you can't go forward or can't go backwards)
- I would have added routing so you could share the url to a job details page

#Which parts are you most proud of? And why?
- It's been a couple of years since I've used typedscript and Angular 8 (in fact I was using Angular 4 at the time) so it was fun to read about how Angular takes advantage of the class decorators for more consistency and maintainability.

#Which parts did you spend the most time with? What did you find most difficult?
- Initial bootstrap of the app was cumbersome because I had a lot of version conflicts after checkout out the "hello world" starter app provided with the angular documentation. Had to manually switch around versions of node, typescript, and some of the devDependencies to get the app to compile.
- I ran into a CORs issues making requests to the github jobs api... I checked against other dev focused apis (like the openweatherapi) and GET requests to that api were working, so I had to go with a crazy workaround.
- For a production app I'd want to have server side API authentication and create a proper backend service to talk to the api and get the data over a secure connection.
- The unit tests for the jobsService are working nicely, but the unit tests for the job-list component aren't working because angular doesn't know about the material components I'm using. Need to configure the imports/exports correctly to get this working in the future.
