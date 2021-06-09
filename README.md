# Project Overview



## Project Links




- [Github Repo](https://github.com/Nbrof/Project2)
- [Deployed Webpage](https://project2-orcin.vercel.app/)

## Project Description

An webpage that is capable of rendering various XKDC comics across itself. User's will be able to input a number which will grab the XKDC comic in quiestion. 



## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  



|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Application Structuring | Complete
|Day 3| API Integration/Rendering| Complete
|Day 3-4| MVP & Bug Fixes | Complete
|Day 4| Final Touches | Complete
|Day 5| Present | Incomplete




## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 


```
Link to API page: https://xkcd.vercel.app/?comic=303

{Comictest {
	
	
alt: "Others include \"We've incrementally improved the estimate of this coefficient,\" \"Maybe all these categories are wrong,\" and \"We found a way to make student volunteers worse at tasks.\""
day: "28"
img: "https://imgs.xkcd.com/comics/types_of_scientific_paper.png"
link: ""
month: "4"
news: ""
num: 2456
safe_title: "Types of Scientific Paper"
title: "Types of Scientific Paper"
transcript: ""
year: "2021" }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile](https://i.imgur.com/dcevV0B.jpeg)
- [Tablet](https://imgur.com/JtTsJ8w)
- [Desktop](https://i.imgur.com/Mr4Cdr7.jpg) 
- [Time Matrix](https://i.imgur.com/AUKG8Ad.jpg) 
- [React Architecture](https://i.imgur.com/T9mDp7F.jpg)
- [Database Arcitecture](https://i.imgur.com/T9mDp7F.jpg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- Find and use external api 
- Render data on page 
- Render the latest XKDC comic to the page
- Allow user to interact with a button to grab a random comic
- Basic styling 
- Ensuring Responsiveness

#### PostMVP 

- Allow user to input some numbers to select a comic
- Advanced Styling and details.
- Additional Comic snippets
- Animation effects
- Research into incorperating additional Libraries.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Comic | This will render the comic that is pulled from the API| 
| Infobox | This will render information, Including proper copyright information|
| Footer | This will render the header include the nav | 
| Quotebox | A responsive component that briefly talks about XKDC's creator. | 




## TimeFrames

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Information Research | M | 3hrs|3hrs| 
| Structure Planning | M | 2hrs|1.5hrs | 
| Reactstrap Research | M | 2hrs|1hrs | 
| Basic App/Component Structuring| H | 3hrs|2.5hrs | 
| Router Structuring | L | 2hrs| 2hrs| 
| API Manipulation | H | 2hrs| 2hrs | 
| API Element Rendering| H | 3hrs| 3hrs | 
| Advanced Component Structuring| M | 2hrs|1.5hrs | 
| User Input| M| 2.5hrs|2hrs | 
| Reponsive Design| H | 3hrs|3.5hrs | 
|  Basic App Styling| M | 3hrs| 4hrs | 
| Component Styling| M | 2hrs| 1hr | 
| Bug Fixes | H | 2.5hrs| 3hrs | 
| Total | H | 32hrs| 30hrs |  

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

 "ReactStrap: Page Styling and structure"

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
  const getComic = async () => {
      const url = `https://xkcd.vercel.app/?comic=${getRandomInt(comicStart.num)}`
      const response = await fetch(url);
      const Data = await response.json()
        setComic(Data)
      }
```


## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### 

**ERROR**: API Information not being received                 
**RESOLUTION**: CORS Error, Swapped to seperate API that had the same information.

**ERROR**: App would not deploy on a live site                    
**RESOLUTION**: Continuous Integration error, Added CI=False to NPM Build.

**ERROR**: Text would not properly render in Quotebox component                
**RESOLUTION**: Property was not properly passed down, Restructed Quotebox into an about box.






