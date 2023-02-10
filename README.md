# CV--Portfolio
![image](https://user-images.githubusercontent.com/119969411/218035466-ee3d5b21-e4c1-4e99-a6ce-e11666ecffa0.png)

The __*CV Portfolio*__ is a site, based on a *CV summary* page (which runs in Code Institutes GITHUB repositories - developed in GITPOD).
The site provides an automation of gathering CV skills and a simple overview for the "*Recruiters*"... Where data is filled and poulated in a well designed way for simplicity.
This site will improve the collaboration between jobrecruiters and careerseekers trying to get out in the job-market.

# Features

The __*"CV Portfolio"*__ site has:

* A landing page with collected skills overview.
* A summarised wotkhistory page.
* A download page for collecting detailed workhistory and education history.
* A footer with social media links.
* A contact Form page, for recruiters to get in touch wih job offers.

## Existing Features

### The Landing page

![image](https://user-images.githubusercontent.com/119969411/218036626-3b20d924-7cbd-4e34-b9bb-6c48262e0ef1.png)

The Landing Page has 4 easy navigation bars, and a 404 page connected to it, to get back on track - if the user gets lost.

### The Details

![image](https://user-images.githubusercontent.com/119969411/218036815-d8c17592-1ae8-4084-87d3-d458a62531f2.png)


### The Form

![image](https://user-images.githubusercontent.com/119969411/218036204-f7088942-aee4-441d-a06f-510678c81100.png)


- When submitting the form - a confirmation dialog will be poped-up for the user to confirm that the request has been sent.
  * The form is sent to the *job-seeker* via email (using emailJS API).

### The download

![image](https://user-images.githubusercontent.com/119969411/218036323-d5d376d7-d8d3-4375-998d-97914b9fe34d.png)

All files are in pdf format and should be easy to access, by pressing the links.

### The footer

![image](https://user-images.githubusercontent.com/119969411/218037373-5e5d6847-bff4-4f09-ae64-c728fbbe1f33.png)

All medialink-icons are clickable with a navigation to the job seeking user.

# Getting Set-up

![image](https://user-images.githubusercontent.com/119969411/218037707-63057348-3971-49ea-82e3-3398c2e8005b.png)

To get the contact-form to work, there is a need for registration at emailJS or other email-API-services:
* Once registrered, there are simple instructions on how to connect your contact form with the mail service - with templates etc.

![image](https://user-images.githubusercontent.com/119969411/218038803-7d2b89b9-99b0-4b2b-9271-4d392a3ef985.png)

As the site has many clickable items, a 404 (html) message is provided for the user, to get back on track.

# Testing

The site has been tested within the timeline and resources given, on different devices and different browsers.

## Validator Testing

![image](https://user-images.githubusercontent.com/119969411/218037850-dbd9899b-4dac-43f5-9c11-48f65f59e4f1.png)

### JigSaw
No errors were returned when passing through Jigsaw w3c validator.

## Functional Testing

### Bugs -Solved

Bootstrap version update made some of the site look unsyncronized, so the latest bootstrap version was downloaded and extra code were added to fix unsynced areas -where bootstrap would not support the layout wished for.

### Bugs -Remaining

![image](https://user-images.githubusercontent.com/119969411/218038372-269a49b2-3888-4ef9-90d4-610ef37b1607.png)

Also a bootstrap version Issue... This will be handled within a near future, when there is more time to dig into the Issue.

# Deployment

## Steps
1. Code pushed to GITHUB via GITPOD, after testing.
2. Site deployed to main branch via GITHUB pages.
  

## Links
The GitHub repository link:
https://github.com/SvenLoevgren/CV--Portfolio

The __live__ link can be found here:
https://svenloevgren.github.io/CV--Portfolio/ 

# Credits

Code Institute education in general coding with CSS, HTML and Javascript- including advice of where to find free content on the web to style the site, plus tools to use to validate the code, plus code content and how to work with external objects via API.
Extra credit to my mentor given by Code Institute, for making it possible to understand the logic of coding and troubleshooting this site.

## Content
The Site and layout was taken from Code institute "Bootstrap" project... I then adjusted it all to fit the "CV Portfolio" project/site- with adding features as styling site and getting dowload files and contact form in place etc.

## Media
Site layout from Code Institute "Bootstrap project".
Fontawsome, google Fonts and Bootstrap original download sites.
emailJS API used for connecting to the contact Form.
GITHUB Used for deployment.
Over all -  The whole project was built and released with the assistance of Code Institute and based on their "Bootstrap" project.
