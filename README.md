# FOODLY - Recipe Recommendation Application
Web application for finding recipes based on ingredients you already have.

Include/exclude ingredients, check nutrients, and save your favorite recipes!

## Setup to run locally

Install node ^8.15.1 and webpack ^2.2.1 if not already installed.

Clone repo to local machine.

Generate Edamam API Key for Recipe Search: https://developer.edamam.com/

Update API Key in `config.js` file with the API Key generated from above step.
```sh
export const key = {
  RECIPE_API_KEY: 'example-api-key',
}
```

From within the root directory of repo run the following commands:

```sh
npm install
npm run build:production
npm run server:production
```

Navigate to link in a web browser.
>http://localhost:3000

## Screenshots
Home
![home](https://foodly-mvp.s3-us-west-1.amazonaws.com/ss-home.png)


Register
![register](https://foodly-mvp.s3-us-west-1.amazonaws.com/ss-register.png)

Login
![login](https://foodly-mvp.s3-us-west-1.amazonaws.com/ss-login.png)

Search Results
![search results](https://foodly-mvp.s3-us-west-1.amazonaws.com/ss-search.png)

## Credits
- Edamam API: https://developer.edamam.com/

## Tech Used
React, Bootstrap, Hooks, Passport.js, bcrypt, Webpack, Node.js, Express, MongoDB, Mongoose