# City Paws
## Description
Most pet owners wish to take their pets to various places with them for training reasons, recreational reasons or otherwise! City Paws will satisfy these needs. It is a user-friendly app that lets you search pet friendly locations in Toronto.
## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [User Case](#userCase)
  - [Technologies Used](#technologiesUsed)
  - [License](#license)
  - [Credits](#credits)

<a name="userCase"></a>
## User Case/ Acceptance Test 
```
- AS a pet-owner, I WANT to be able to identify areas where I can bring my pet SO THAT I can live a quality lifestyle
- GIVEN a sign up page
- WHEN I sign up
- THEN I specify name, email address, password
- THEN the account is created
- WHEN I login, I enter my email address and password
- THEN I select "FIND A SPOT" to search for a pet-friendly location
- WHEN I enter type of location (For testing use: Cafe), postal code (for testing use: M2J1L1), and click search
- THEN the search results will show name,description, and location 
- WHEN I add a review and click "Review"
- THEN the review I added is posted
```

## Sample User to login:
- Email: theneman2@last.fm
- Password: password123 
- Type of location : Cafe
- Postal Code: M2J1L1

## Installation
- Download or clone the repository 
- Run `npm i`
- Then run `npm run seed`
- Then run `npm start`

File Structure Overview:

<img src="./public/images/file-structure.png" width="250">

## Heroku Website (Deployed Application)
https://frozen-escarpment-88030.herokuapp.com/home 

![screenshot](./public/images/screenshot.png)

<a name="technologiesUsed"></a>
## Technologies used

- axios
- bcrypt
- bulma
- connect-session-sequelize
- dotenv
- express
- express-handlebars
- express-session
- handlebars
- mysql2
- nodemon
- sequelize
  
## License
This application is covered by [MIT](https://opensource.org/licenses/MIT) license. 
  
## Credits: 
- Abrar Chowdhry
- Colin Nebula
- Francis Lu
- Jessica Wu
- Nerin Kaur
- Noyemi Ohanyan 
  