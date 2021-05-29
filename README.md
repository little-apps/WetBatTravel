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
