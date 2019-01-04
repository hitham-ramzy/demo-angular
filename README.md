# AltenFrontend

+ This application was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.
+ This application also using font awesome.
+ This application is a demo for angular application calling alten resources application to get the list of vehicles with their customers
+ You can filter the result with form in the page and click search button

## 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Docker container 
To create docker container for alten frontend application please run:

    docker build -t alten-frontend .
    
Then 
    
    docker run -p 4200:4200 --rm alten-frontend
     
The Application will run on port 4200
