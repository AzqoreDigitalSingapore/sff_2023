# CICD Status

Detect any push to main branch, build and push to gh-page branch with copy of index.html to 404.html
[![Build and Deploy](https://github.com/AzqoreDigitalSingapore/sff_2023/actions/workflows/cicd.yml/badge.svg)](https://github.com/AzqoreDigitalSingapore/sff_2023/actions/workflows/cicd.yml)

Detect and push to gh-page branch, build and deploy to Github Pages
[![pages-build-deployment](https://github.com/AzqoreDigitalSingapore/sff_2023/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/AzqoreDigitalSingapore/sff_2023/actions/workflows/pages/pages-build-deployment)

# Deployment Instructions

ng build --output-path docs  --base-href /sff_2023/ 
cp /docs/index.html /docs/404.html

# Website

[https://azqoredigitalsingapore.github.io/sff_2023/]

# Sff2023

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
