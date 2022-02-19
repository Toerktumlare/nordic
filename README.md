# Nordic-Montoring app 
[![Build Status](https://travis-ci.org/Tandolf/nordic.svg?branch=master)](https://travis-ci.org/Tandolf/nordic)

Application for monitoring current daily workouts at [Crossfit Nordic](http:www.crossfitnordic.se)

## Prequisites

java: 11

maven: 3

npm 17 or higher

## Build
clone the repo run
```
mvn clean install
```

## Run localy for development
After you build the application, it is served on localhost:8080 but if you want to run the react application standalone for development purposes then run.

``` 
./frontend/nordic-monitoring/npm start 
```

And the react application will be avaliable at localhot:3000

> The application need a google api secret to start and will fail if this secret is not in place.

## Integrations
backend is dependent on google sheet API and has also an integration against BRP systems for fetching workout class participants.

[BRP systems activities API](https://dok.brpsystems.se/display/API/activities)

```
$ curl "https://crossfitnordic.brpsystems.com/brponline/api/ver2/activities.json?apikey=<apikey>&businessunitids=1&startdate=2019-11-09&enddate=2019-11-09"
```

