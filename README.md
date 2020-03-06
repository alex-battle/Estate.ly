# Estate.ly
Luxury Real Estate Website to view, upload, and search properties 
![3b0f623a-d6ef-4bab-b626-8a5e422f1ed5_200x200](https://media.git.generalassemb.ly/user/25137/files/f72a5800-5ef4-11ea-8e43-56c5ad26a2d9)
- [Full Stack Project](#Full-Stack-Project)
  - [Overview](#Overview)
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
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


<br>

### Permissions
Imgur
Faker
Google
Zillow

<br>

## MVP

> Estate.ly is a real estate app allowing users to input, search, and view properties. The goals of this project is to mimic the workflow of local luxury real estate brokerage websites. Features included in this project allow users to input properties and property info into the backend database powered by Ruby based on their status, whether they are for sale or for rent, and category in which the Estate.ly firm has a "contract" on. Another feature included in this application is the ability to search from an external api powered by Zillow to list real time properties for sale. A challenge I see myself facing is the authentication process of creating log-in for the admin user controlling this. Another challenge I see myself facing is tackling the level of CSS that I envision for the app. The last challenge I see myself facing is dealing with Formik because this would be a new feature and I do not truly see it as a challenge, but just because it is new, I do not know what to expect. And this goes for any additional libraries that I find along the way that I might see fit for this project. Post-MVP goals would be to add maps to each of the properties and base them off of the property location when people both search the properties and when they look at the actual property info. Categorizing properties by whether they are for rent or for sale are also post MVP goals. 

<br>

### MVP Goals

- _Search properties and rendering info about each property_
- _User authentication_
- _Full CRUD posting, deleting and updating property info_
- _CSS_

<br>

### MVP Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Build front end of application_ |
|   React Router   | _Routing library_ |
|     Axios      | _Perform Http api requests_ |
|  Ruby on Rails  | _Build back end of application._ |
|     Faker      | _Provide fake data to fill in for Agent Info/addresses/etc._ |
|     Formik      | _Create and handle form state and data_ |
| External Api | _https://www.zillow.com/howto/api/GetSearchResults.htm_ |

<br>

### MVP Client (Front End)

#### Wireframes

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

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    Header    |   N   | _The Header will contain Navigation_               |
|  Navigation  |   N   | _The navigation will provide a links to each page(Luxury Properties, Search Properties, Rental, Sales, Staff, Open House, About us)_       |
|   Main    |   Y   | _The main component will hold all my Routes and dependencies as well as pass props_      |
| For Rent |   Y   | _The For Rent Component will pass props to the Rent Results page as well as render a list of properties for rent_                 |
|    Rent Results    |   N   | _Render specific info about each property for Rent_               |
| For Sale | Y | _The For Sale Component will pass props to the Sale Results page as well as render a list of properties for sale_	|
|    Sale Results    |   N   | _Render specific info about each property for sale_               |
|    Search Page    |   Y   | _Input search parameters to make External API Call to pass props down in order to render All properties available_               |
|    House Results    |   Y   | _House results render a list of houses for sale and pass props down to search results component_               |
|    Search Results    |   N   | _Render specific info about each property from API source_               |
|    About Us     |   N   | _A little data about the company and origins_               |
|    Contact    |   N   | _Forms to input  contact information and phone number/email_               |
|    Staff    |   Y   | _Render Staff photos and names and pass info to Agent info component_               |
|    Agent Info    |   N   | _Info card for each agent_               |
|    Footer    |   N   | _The footer will show contact info and dummy links._ |

<br>

### MVP Server (Back End)

#### ERD Model

![image](https://media.git.generalassemb.ly/user/25137/files/627a3580-5f9a-11ea-9839-563271e9c9d7)

#### Endpoints

- GET `/users`
	- Index route returning an array of all Users 
- GET `/users/:id`
	- Show route for a user requested by User ID
- POST `/users`
	- Create route for a new user
- PUT `/users/:id/update`
  	- Update a user by id 
- GET `/agent`
	- Index route returning an array of all Agents 
- GET `/agent/:id`
	- Show route for a Agent requested by Agent ID
- POST `/agent`
	- Create route for new Agents
- PUT `/agent/:id/update`
  	- Update a user by id 
- GET `/property`
	- Index route returning an array of all properties 
- GET `/property/:id`
	- Show route for a property requested by Property ID
- POST `/property`
	- Create route for a new property
- PUT `/property/:id/update`
  	- Update a property by id 

<br>

***

## Planning
<br>

### Timeframes

![image](https://media.git.generalassemb.ly/user/25137/files/c0fcd080-5f14-11ea-8d77-ffa83c31743b)

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Add Header Links    |    M     |     2 hrs      |    -- hrs    |
| Set links to routes |    H     |     2 hrs      |     -- hrs     |
| Fill About Us/Contact Info with Dummy Data |    L     |     2 hrs      |     -- hrs     |
| Get External API to render data |    H     |     3 hrs      |     -- hrs     |
| Create form for House search calling from external Api |    H     |     3 hrs      |     -- hrs     |
| Get House results data to render in a list |    H     |     3 hrs      |     -- hrs     |
| Render specific house data from house results |    M     |     3 hrs      |     --hrs     |
| Render data from local api for Rentals, Sales, and Staff |    H     |     6 hrs      |     --hrs     |
| Render specific data from local api for Rentals, Sales, and Staff results |    M     |     3 hrs      |     --hrs     |
| Styling |    H     |     18 hrs      |     -- hrs     |
| Create CRUD Actions |    H     |     3 hrs      |     -- hrs     |
| User Authentication | H | 5 hrs | --hrs |
| TOTAL               |          |     53 hrs      |     -- hrs     |

<br>

### Schedule

|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 4th | Project proposal worksheet / psuedocoding |
|Mar 5th | Project pitch / build out endpoints       |
|Mar 6th | Pitch Approval/Start low priority front end tasks     |
|Mar 7th | Build Skeletons/Backend                   |
|Mar 8th | Get all data rendering                    |
|Mar 9th | Implement user auth / begin styling       |
|Mar 10th| Finish styling/ MVP                       |
|Mar 11th| Post-MVP                                  |
|Mar 12th| Polishing                                 |
|Mar 13th| Final Presentations                       |

<br>

***

## Post-MVP

> 
Have a for rent and for sale section to render a list and specific info<>
Have a favorites section so visitors can save the properties that they like<>
When a property is rented/sold switch to unavailable<>
Agents page and add agent profile <>
Maps pinned to house location <>

<br>

***

## Project Change Log

> This section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

***
