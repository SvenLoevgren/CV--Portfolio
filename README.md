# CV -Summary
![image](https://user-images.githubusercontent.com/119969411/218035466-ee3d5b21-e4c1-4e99-a6ce-e11666ecffa0.png)

The __*Portfolio 3*__ is an APP, based on a *Python* terminal (which runs in Code Institutes Mock Terminal on Heroku).
The APP provides an automation of reporting logistics by the "*End User*"... Where data is filled into the Terminal, via an Input field - which in return - updates a *SpreadSheet*, for existing and future logistics for their company market sales.
This APP will improve the collaboration between business units in a *company* and at the same time "__refactor__" their sales market - for better controlled and optimized sales.

# Features

The __*"Portfolio 3"*__ APP has:

* A Python Terminal and a *Google Spread sheet (gspread)* controlled via an API, from the Terminal.
* The terminal works as a "Macro" for this *gspread* - where all the Calculation relies on the Python Modeling.
* There is a *timestamp* added to the *gspread* for all new stock calculated rows - so that the user can easy track their Market, and "if wanted" store old-data.

## Existing Features

### The Landing page

![image](https://user-images.githubusercontent.com/119969411/218036626-3b20d924-7cbd-4e34-b9bb-6c48262e0ef1.png)

### The Details

![image](https://user-images.githubusercontent.com/119969411/218036815-d8c17592-1ae8-4084-87d3-d458a62531f2.png)


### The Form

![image](https://user-images.githubusercontent.com/119969411/218036204-f7088942-aee4-441d-a06f-510678c81100.png)


- There is an *Input* field in the Terminal, which is open for an entry when the APP runs.
  * To update sales figures
- There is also validation of all data that has been entered within the *Input* field.
  * Validation of gspread data Range
  * Validation gspread data Len
  * Validation of Int numbers
  * Validation of comma separation (for gspread updates)

### The download

![image](https://user-images.githubusercontent.com/119969411/218036323-d5d376d7-d8d3-4375-998d-97914b9fe34d.png)


There is a Calculation of all 3 worksheets in this gspread (via python code), to state existing stock, surplus data, sales from end-user input and a print of needed stock for the next sales market.

### The footer

![image](https://user-images.githubusercontent.com/119969411/218037373-5e5d6847-bff4-4f09-ae64-c728fbbe1f33.png)

## Future Features

The APP will be able to:
* Add timestamps to all worksheets within the gspread.
* The Terminal will have a predefined -*"clear" Terminal*- entry, after each run.
* The Error codes thrown to the end-users, will be overviewed, and adjusted accordingly, to make them more “*readable*”.
* The *gspread* will be cleared from old-data, to pass this data to a separate worksheet-history sheet.
  - This can be done with a scheduled job.

# Getting Set-up

![image](https://user-images.githubusercontent.com/119969411/218037707-63057348-3971-49ea-82e3-3398c2e8005b.png)

There needs to be a timestamp and a gspread module for the APP to be able to run and execute commands... there for you need to add these Modules in Gitpod:
* For these three imports in the .py file - as shown In the image above, make sure that:
   1. For Two imports… the *gspread* and its *API*:
      - These two Imports needs an installation via the Gitpod Terminal (Terminal command: *pip3 install gspread google-auth* )
      - Note: Default gspread added below this line, but It needs to be set up in Google drive and Google cloud API to work, together with the cred.json file credentials.
        - https://docs.google.com/spreadsheets/d/1OPUMRFogoomR358iH9mxmdqe6XuXhQ_8nCONxVfFuRQ/edit?usp=sharing
   2. One import (See image above) is for the timestamp module
      - The Import for the Timestamp will work with no installation in Gitpod, though it is a part of Python Modelling (and stating IMPORT of this module in the .py file is enough).
      
![image](https://user-images.githubusercontent.com/119969411/218038803-7d2b89b9-99b0-4b2b-9271-4d392a3ef985.png)

# Testing

The site has been tested within the timeline and resources given, on different devices and different browsers.
PEP8 check has been done, before deployment.

## Validator Testing

![image](https://user-images.githubusercontent.com/119969411/218037850-dbd9899b-4dac-43f5-9c11-48f65f59e4f1.png)

### PEP8
No errors were returned when passing through the Code Institutes PEP8 validator.

## Functional Testing

### Bugs -Solved

There was a "*Typo*" found regarding the "next line function" which was changed from "/n" to "\n".
  - This peace of code could probably just have been deleted, but the overall view looked leaner to when the end-user input field appeared below the input statement, and this change also provided for some extra characters to be added to the input field -for future features (though the line break now allows more width for the input – without the need to adjust the screen width in the GUI).

### Bugs -Remaining

![image](https://user-images.githubusercontent.com/119969411/218038372-269a49b2-3888-4ef9-90d4-610ef37b1607.png)

The errors printed to the end-user when typing other things into the Terminal - except comma separated numbers - are confusing (for a non-programmer).
- These Bugs will be remaining though the message still ends up with __*invalid data- please try again!*__ and after that error is thrown, a clear text of what is expected of the users input is printed within the Terminal (see IMAGES).
  * Note that the "__*Less than 6 numbers*__" errors are all okay (Readable for end-users) - so there is only a need for changes in the "try" statement for all other validation errors, __within a future release__.
  * An introduction course -together with a 1st and a 2nd line support- would easy handle this "bug"!... also… for an end-user to type in "*bananas*" in a terminal, that clearly states how to and what numbers to type in there, after an *end user introduction*...well… that’s a far more serious Issue than the actual bug itself!
    - *BUG REMAINS for future a release! *

# Deployment

## Steps
1. Ignore file - checked for the CREDS to not be pushed to Github.
  - This was done via the Gitpod terminal command ( pip freeze > requirements.txt ).
2. Repository pushed to Github.
3. Heroku CREDS and PORT keys updated with needed values.
4. Build Packs added to Heroku
   1. python
   2. node.js
5. Link Heroku APP with Github repository
6. Deploy In Heroku (A manually deploy to main was used)

## Links
The site was deployed via GitHub pages:
The __live__ link can be found here - https://portfolio3.herokuapp.com/
(Link for Code: https://github.com/SvenLoevgren/portfolio-3 ).

# Credits

Code Institute education in general coding with python- including advice of where to find free content on the web to style the APP, plus tools to use to validate the code, plus code content and how to work with external objects with python via API.
Extra credit to my mentor given by Code Institute, for making it possible to understand the logic of coding and troubleshooting this APP.

## Content
The Site and layout was taken from Code institute "Love Sandwiches" project... I then adjusted it all to fit the "Protfolio 3" project/APP- with adding features as styling external gspread and adding timestamps etc.
Instructions on how to implement the *"dictionary, to be displayed at the end of the code running in the APP - for the end users next market advice"*, was taken from the Code Institute education material.

## Media
Initial Spreadsheet from Code Institute "Love Sandwiches project"
Google Drive and API used for connecting to the Spreadsheet.
Heroku Used for APP release.
Over all -  The whole project was built and released with the assistance of Code Institute and based on their "Love Sandwiches" project.
