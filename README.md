# Estate.ly
Luxury Real Estate Website to view, upload, and search properties 
![3b0f623a-d6ef-4bab-b626-8a5e422f1ed5_200x200](https://media.git.generalassemb.ly/user/25137/files/f72a5800-5ef4-11ea-8e43-56c5ad26a2d9)
- [Full Stack Project](#Full-Stack-Project)
  - [Overview](#Overview)
    - [Team Members](#Team-Members)
    - [Team Expectations](#Team-Expectations)
    - [Permissions](#Permissions)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP Libraries](#MVP-Libraries)
    - [MVP Client (Front End)](#MVP-Client-Front-End)
      - [Wireframes](#Wireframes)
      - [Component Hierarchy](#Component-Hierarchy)
      - [Component Breakdown](#Component-Breakdown)
      - [Component Estimates](#Component-Estimates)
    - [MVP Server (Back End)](#MVP-Server-Back-End)
      - [ERD Model](#ERD-Model)
      - [Data Heirarchy](#Data-Heirarchy)
  - [Post-MVP](#Post-MVP)
  - [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


<br>

### Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash](). Custom digital design and branding by John Lansing. Digital assets stored locally and on [Imgur]().

<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### MVP Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### MVP Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### MVP Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

DESKTOP WIREFRAME
![image](https://media.git.generalassemb.ly/user/25137/files/e7693e80-5f09-11ea-85e2-e800eb913988)
https://www.figma.com/file/bEExsFE3oxVAMyDPyAD0kK/Estate.ly?node-id=0%3A1


MOBILE WIREFRAME
![image](https://media.git.generalassemb.ly/user/25137/files/1d59f300-5f09-11ea-9c75-e0e4089573fc)
https://whimsical.com/V2Eh2wf5noksCVP6UwV6TG

#### Component Hierarchy

![image](https://media.git.generalassemb.ly/user/25137/files/a7ee2280-5f08-11ea-858d-a7e62401241f)
https://whimsical.com/7A5QWSrEVfzYX7XRt8o4XK

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    Header    |   n   | _The Header will contain Navigation_               |
|  Navigation  |   n   | _The navigation will provide a links to each page(Luxury Properties, Search Properties, Rental, Sales, Staff, Open House, About us)_       |
|   Main    |   y   | _The main component will hold all my Routes and dependencies as well as pass props_      |
| For Rent |   y   | _The For Rent Component will pass props to the Rent Results page as well as render a list of properties for rent_                 |
|    Rent Results    |   n   | _Render specific info about each property for Rent_               |
| For Sale | y | _ The For Sale Component will pass props to the Sale Results page as well as render a list of properties for sale_	|
|    Sale Results    |   n   | _Render specific info about each property for sale_               |
|    Search Page    |   y   | _Input search parameters to make External API Call to pass props down in order to render All properties available_               |
|    House Results    |   y   | _House results render a list of houses for sale and pass props down to search results component_               |
|    Search Results    |   n   | _Render specific info about each property from API source_               |
|    About Us     |   n   | _A little data about the company and origins_               |
|    Contact    |   n   | _Forms to input  contact information and phone number/email_               |
|    Staff    |   y   | _Render Staff photos and names and pass info to Agent info component_               |
|    Agent Info    |   n   | _Info card for each agent_               |
|    Footer    |   n   | _The footer will show contact info and dummy links._ |

<br>

### MVP Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model.

#### Endpoints

> Use this section to list a selection of your intended endpoints and their uses. Please list any and all custom-created endpoints.

- GET `/users`
	- Index route returning an array of all Users and nested 'Likes'
- GET `/users/:id`
	- Show route for a user requested by ID
- POST `/users`
	- Create route for a new user
- PUT `/users/:id/nominate`
  - Update a user by id to create an association to the ballots table

<br>

***

## Planning

> You've got a little over a week to reach your Minimum Viable Product. Use these sections to plan out your approach.

<br>

### Timeframes

> Use this section to estimate the time necessary to build out the various sections of your project. You may include an additional priority matrix, if you desire.

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |
| TOTAL               |          |     6 hrs      |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Schedule

> Use this section to look at your project week and plan out when and what you want to do.

|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 4th | project proposal worksheet / psuedocoding |
|Mar 5th | project pitch / build out endpoints       |
|Mar 6th | Build out front-end components            |
|Mar 7th | OFF                                       |
|Mar 8th | impliment user auth                       |
|Mar 9th | styling                                   |
|Mar 10th| MVP, begin post-MVP                       |
|Mar 11th| post-MVP                                  |
|Mar 12th| polishing                                 |
|Mar 13th| final presentations                       |

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

<br>

***

## Project Change Log

> This section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

***
