This project was done during the omnistack week.

The application consists of 3 parts:

    - Backend: the application backend was developed in Nodejs in conjunction with Mongodb
    
    - Web frontend: the frontend was developed with React
    
    - Mobile frontend: the mobile frontend was developed with React-Native
    
    
##Installation

### Backend

First step:
`cd backend && npm install` or` cd backend && yarn install`

Second step:
Create an .env file with the following configuration:
``
MONGO_STRING = <Connection string with mongodb>

PORT = <Port>
``

Third step: `` yarn start`` or `` npm start``

### _Frontend Web_

First step:
`cd web && npm install` or` cd web && yarn install`

Second step:
Change the package.json key proxy to the port used in the backend

Third step: `` yarn start`` or `` npm start``

### _Frontend Mobile_

First step:
`cd mobile && npm install` or` cd mobile && yarn install`

Second step:
Change the package.json key proxy to the port used in the backend

Third step: `` yarn start`` or `` npm start``




## Credits

I would like to thank Rocketseat for this fantastic experience.
