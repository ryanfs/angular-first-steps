## User Stories

[x] As a user of the web app I can view a paginated list of job postings from GitHub's API so that I can know what jobs are currently available

[x] As a user of the web app I can search the description of job postings from GitHub's API the kind of job's I am looking for

[x] As a user of the web app I can click on a job posting from GitHub's API So that I can view more details about the position


##Follow Up Questions

#What libraries did you use? Why did you use them?
- Google material design framework for styles and components like the spinner and accordion panels
- HttpClientModule for the GET request to the api

#If you had more time, what further improvements or new features would you add?
- I would break job-list component into a few smaller components
- I'd set up a server and connect to the github api via a secure server connection
- I'd create my own api layer (on top of what github gives back) with an interface specific to the front end
- Since we're hitting a third party api I'd consider caching the results in the future
- Add limits logic to the prev/next buttons (sense when you can't go forward or can't go backwards)
- I would have added routing so you could share the url to a job details page
- Make it so the form elements don't jump when a user conducts a search

#Which parts are you most proud of? And why?
- It's been a couple of years since I've used typedscript and Angular 8 (in fact I was using Angular 4 at the time) so it was fun to read about the framework paradigms like … and ...

#Which parts did you spend the most time with? What did you find most difficult?
- Initial bootstrap of the app was cumbersome because I had a lot of version conflicts after checkout out the "hello world" starter app provided with the angular documentation. Had to manually switch around versions of node, typescript, and some of the devDependencies to get the app to compile.
- I ran into a CORs issues making requests to the github jobs api... I checked against other dev focused apis (like the openweatherapi) and GET requests to that api were working, so I had to go with a crazy workaround.
- For a production app I'd want to have server side API authentication and create a proper backend service to talk to the api and get the data over a secure connection.
