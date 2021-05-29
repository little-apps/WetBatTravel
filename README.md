# Wet Bat Travel Prototype

## Building Application Instructions

### Linux or Windows

You will need a Linux or Windows server that supports the following before continuing:

 * [PHP v7.2+](https://www.php.net/downloads)'
 * Database (MySQL, SQL Server, or PostgreSQL)
 * [Composer](https://getcomposer.org/download/)
 * [NodeJS v14](https://nodejs.org/en/download/)
 * [NPM v7](https://nodejs.org/en/download/package-manager/)

1. Clone the Git repository into a directory.

       git clone https://github.com/little-apps/WetBatTravel.git
       cd WetBatTravel
       
2. Create a file called ``.env`` in the ``WetBatTravel`` directory.
3. Copy and paste the following into the ``.env`` file. Replace each ``xxx`` with an appropriate value.

       APP_NAME="Wet Bat Travel"
       APP_ENV=local
       APP_KEY=
       APP_DEBUG=false
       APP_URL=http://xxx

       LOG_CHANNEL=stack
       LOG_LEVEL=debug

       DB_CONNECTION=mysql
       DB_HOST=xxx
       DB_PORT=3306
       DB_DATABASE=xxx
       DB_USERNAME=xxx
       DB_PASSWORD=xxx
      
4. Install the needed Composer packages:

       composer require
       
5. Generate a key for the app and JWT:

       php artisan key:generate
       php artisan jwt:secret
       
6. Install the needed NPM packages:

        npm install
        
7. Compile the Sass and TypeScript files:

        npm run production
        
7. Serve the application using PHP:

        php artisan serve --host=localhost --port=8080
        
8. Access the app in a web browser by going to http://localhost:8080

### Heroku

You will need the following before continuing:

 * [Heroku account with active subscription](https://dashboard.heroku.com/apps)
 * [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
 * [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

1. Clone the Git repository into a directory.

       git clone https://github.com/little-apps/WetBatTravel.git
       cd WetBatTravel
       
2. Create app on Heroku:

        heroku create
        
3. Push the source code to Heroku:

        git push heroku
        
4. Set the ``APP_KEY`` environment variable:

        heroku run php artisan key:generate --show
        heroku config:set APP_KEY="(Output from above command)"

5. Set the ``APP_URL`` environment variable to the URL of your Heroku app:

        heroku config:set APP_URL="https://xxxx.herokuapp.com/"
        
6. Add the NodeJS build pack to the Heroku app:

        heroku buildpacks:add heroku/nodejs
        
7. Set the database environment variables by:

    a) Replacing ``xxx`` with the approriate value and running each command:

        heroku config:set DB_CONNECTION=xxx
        heroku config:set DB_HOST=xxx
        heroku config:set DB_PORT=xxx
        heroku config:set DB_DATABASE=xxx
        heroku config:set DB_USERNAME=xxx
        heroku config:set DB_PASSWORD=xxx

    b) You can also spin up a ClearDB MySQL server by going to the Resources tab for the Heroku app and simply set the DATABASE_URL to the same value as ``CLEARDB_DATABASE_URL``.
    
![Heroku ClearDB](https://user-images.githubusercontent.com/1192535/120055729-2abf3980-bff5-11eb-936e-ec150ac8573e.png)
 
        heroku config:get CLEARDB_DATABASE_URL
        heroku config:set DATABASE_URL="(Output from above command)"
        
8. Trigger the Heroku app to be re-deployed and re-compile assets:

        git commit --allow-empty -m "Trigger Heroku deploy"
        git push heroku
        
9. Migrate the database so the structure is correct and the tables are seeded. First, you will need to install the needed Composer packages using Bash.

        heroku run bash
        $ composer install
        $ php artisan migrate:fresh --seed
        
10. Access the app by going to the Heroku URL in your web browser.

## Structural Decisions

1. I put together the ERD using MySQL Workbench and this makes it easier to convert to Laravel's database migrations.
2. I used Bootstrap Studio to put together a template for the dashboard. 
4. I created the app using the starter template for Laravel and set it up to work with TypeScript and React.
5. I moved the ERD into Laravel's database migrations, as well as generated models and seeders for each table.
6. I converted the Bootstrap template into React components (using Reactstrap). I also setup the view so it renders the React components.
7. I created controllers so the backend can be accessed using an API.
8. I modified the React components so they work with the API.
9. I fixed up the UI and added charts as well as icons.

Between the backend and frontend, I would say I put an equal amount of work into both. However, I did put a reasonable amount of work into the frontend so it matches up with the prototype. 

### Frontend Notes
 * I changed some of the form control types so they're more appropriate (ie: a dropdown instead of a textbox for airports and transportation).
 * I included a spinning circle so the user knows it's loading from the API.
 * Since the table of quotes is being shown in the dashboard and quotes page, I created that as a seperate component.

### Backend Notes
 * I had to fix up the database structure a bit so it's able to reference related models.
 * The quote is calculated using the price of the related items and the table also has "adjusted_cost" so it stores the price in case a related item's cost changes.
 * I was going to have the quotes link to specific people (as a m:n relationship) and also the contact person, but this would've taken more time. Instead, I just used a column called "people" that stores the number of people and another column called "contact_name" which stores the persons name as a VARCHAR. 

### Technologies

#### Laravel 8

 * MVC Framework
 * Supports different databases using ORM and migrations.
 * Built-in support for translating TypeScript to ES5 (similiar to Webpack)
 * Simple to write REST APIs
 * Many third-party libraries and plugins available.

#### Heroku

 * Good for small-scale websites.
 * Uses Git to sync so website is updated automatically.

#### React (TypeScript)
 * Client's requirement.
 * Supported by Laravel.
 * TypeScript enforces the data types so you're not pulling variables from nowhere.
 * Scales well (components can be re-used, APIs can be updated as needed)
 * Works with modern web browsers.

#### Database
The following is the ERD for the database:

![ERD](https://user-images.githubusercontent.com/1192535/120057138-0d429d80-bffe-11eb-95ef-8660d917fd97.png)


## Functionality

### Working

 * Quick quote
 * View quotes
 * View a quote

### To Do

 * Authentication
