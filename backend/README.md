# RESTful CHESS API using Node.js, Express, Mongoose & TypeScript

## Prerequisites

Install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine or use a cloud service [mLab](https://mlab.com/).

## Features

- [TypeScript](https://www.typescriptlang.org/) as language
- ODM: [Mongoose](https://mongoosejs.com/)
- Framework: [Express.js](https://expressjs.com/)
- Linting and formatting code using [TSLint](https://palantir.github.io/tslint/) & [Prettier](https://prettier.io/)
- Authentication & Authorization with [JSON Web Tokens](https://jwt.io/)
- Easy configuration of environment variables thanks to [dotenv](https://github.com/motdotla/dotenv)
- [Morgan](https://github.com/expressjs/morgan)for logging request

## Getting Started

### Installation

1. install the dependencies using `npm install` or `npm i`
2. Start the app using `npm run dev`
3. After that, go to: `http://localhost:3000/v1/users` (You will be able to see all the current users. Initially you won't be seeing anything here.)

### Directory Structure Currently

├── src
│   ├── apiV1
│   │   ├── auth
│   │   │  ├── auth.controller.ts
│   │   │  └── auth.route.ts
│   │   ├── users
│   │   │   ├── user.controller.ts
│   │   │   ├── user.controller.ts
│   │   │   └── user.route.ts
│   │   └── index.ts
│   ├── config
│   │   ├── config.ts
│   │   └── db.ts
│   ├── helpers
│   │   ├── errorHandler.ts
│   │   └── verifyToken.ts
│   ├── .env
│   ├── App.ts
│   └── index.ts
├── .editorconfig
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
```