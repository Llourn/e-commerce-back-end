# E-Commerce Back End

## Description

A NodeJS application designed to be used for an e-commerce site/app so product information, tags and categories can be recorded and tracked.

Built with NodeJS, ExpressJS, MySQL and Sequelize.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

Requirements:

- Node v18.x
- MySQL Server

Instructions:

- clone this repo.
- cd into project directory
- npm install
- update MySQL database connection configuration in `./config/connection.js` or create a `.env` file in the root of the project and include the following entries `DB_NAME`, `DB_USER`, and `DB_PASSWORD`. (feel free to replace mysql with any other db supported by sequelize)
- `npm run start`

Seed Data:

- `npm run seed`

Development:

- `npm run watch`

## Usage

Once the app is running the following endpoints will be available for use.

### Categories

GET `/api/categories`

POST `/api/categories`

GET `/api/categories/:id`

PUT `/api/categories/:id`

DELETE `/api/categories/:id`

### Tags

GET `/api/tags`

POST `/api/tags`

GET `/api/tags/:id`

PUT `/api/tags/:id`

DELETE `/api/tags/:id`

### Products

GET `/api/products`

POST `/api/products`

GET `/api/products/:id`

PUT `/api/products/:id`

DELETE `/api/products/:id`

## License

MIT License Copyright (c) 2023 Lorne Cyr

## Badges

![Boot Camp Project](https://img.shields.io/badge/Boot%20Camp%20Project-%E2%9C%94%EF%B8%8F-green)
