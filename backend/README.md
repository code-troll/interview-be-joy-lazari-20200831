# Penneo Weather(TM) Backend
## Description
This is a small weather API that gets data from https://openweathermap.org/.

It uses TypeScript, nodejs and express.


## About this test

Checkout this repo and commit and push your changes. You have full write access to it.

We expect this to take between 30 minutes and 1h30m for someone unfamiliar with typescript. Feel free to google stuff and work like you normally would.

We'd also love to hear your thoughts, feel free to write them to comments or commit them in a file. We'd also love to know what tools and programs you
used.


## How to run this project

You will need to install `nodejs` and `npm`, maybe `nvm` as well. You can find setup instructions on the internet.

To run this project first you need to run following command

```sh
    nvm use              # changes node version to 12.13.0, you probably don't need this
    npm install          # installs all the npm dependencies
    npm start            # runs project on port 9080.
```

## Config
Config is held in `/config/openweathermap/index.js`. There is an API key there, if none of the endpoints work, it could be expired.
You can get a new from https://home.openweathermap.org/api\_keys, you will need to set up an account. Please note, they can take a few
hours to activate.

Please let us know if it's expired, we try to keep it active so you can use this project with as less setup as possible.


## How to use it
Please see the `example-requests.md` file. If some of the requests fail, you might need to update the API key in `/config`.


## Tasks
- [ ] There is a bug in one of the API endpoints, try calling them.
- [ ] Change the temperature units from Kelvin to °C. You may be tempted to just use a formula, try not to.
- [ ] Change the API so that it returns random values for temperature, latitude, location names, etc. You can do this however you see fit, but it should be possible to toggle this useful 'feature' on and off from config or using an environment variable.


## How to send this out to candidates

Create a new repo from this one in the `Penneo` organization, give it a name like `interview-be-<name>-<date>` or something similiar so we can easily find it. Make sure it's private. Give the candidate access to it, if they don't have a Github account, figure something out.
