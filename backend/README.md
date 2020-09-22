# RESTful CHESS API using Node.js, Express, Mongoose & TypeScript

## Prerequisites

- Install [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) globally  on your pc.
- Install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine or use a cloud service [mLab](https://mlab.com/).
- May or may not install [Robo3T](https://robomongo.org/) for mongo GUI.

## Features

- [TypeScript](https://www.typescriptlang.org/) as language
- [Mongoose](https://mongoosejs.com/) for db transactions
- Framework: [Express.js](https://expressjs.com/)
- Linting and formatting code using [TSLint](https://palantir.github.io/tslint/) & [Prettier](https://prettier.io/)
- Authentication & Authorization with [JSON Web Tokens](https://jwt.io/)
- Configuration of environment variables: [dotenv](https://github.com/motdotla/dotenv)
- [Morgan](https://github.com/expressjs/morgan)for logging request

## Getting Started

### Installation

1. install the dependencies using `npm install` or `npm i`
2. Start the app using `npm run dev`
3. After that, go to: `http://localhost:3000/v1/{route}`


### Directory Structure Currently
```
├── src
│   ├── apiV1 - NOT IN USE CURRENTLY
│   │   ├── auth
│   │   │  ├── auth.controller.ts
│   │   │  └── auth.route.ts
│   │   ├── users
│   │   │   ├── user.controller.ts
│   │   │   └── user.route.ts
│   │   ├── game
│   │   │   ├── game.controller.ts
│   │   │   └── game.model.ts
│   │   │   └── game.route.ts
│   │   └── index.ts
│   ├── config
│   │   ├── config.ts
│   │   └── db.ts
│   ├── DataAccess
│   │   ├── index.ts
│   ├── Extensions
│   │   ├── index.ts
│   ├── GameClasses
│   │   ├── Board
│   │   │   ├── index.ts
│   │   ├── Enums
│   │   │   ├── PieceType.ts
│   │   │   ├── PlayerSide.ts
│   │   │   └── PlayerType.ts
│   │   ├── Game
│   │   │   ├── game.interface.ts
│   │   │   ├── index.ts
│   │   ├── HumanPlayer
│   │   │   ├── index.ts
│   │   ├── IdGenerator
│   │   │   ├── index.ts
│   │   ├── Player
│   │   │   ├── index.ts
│   │   │   ├── player.interface.ts
│   │   ├── Piece
│   │   │   ├── index.ts
│   │   │   ├── pieceparams.interface.ts
|   |   |   ├── Bishop
│   │   │   |   └── index.ts
|   |   |   ├── King
│   │   │   |   └── index.ts
|   |   |   ├── Knight
│   │   │   |   └── index.ts
|   |   |   ├── Pawn
│   │   │   |   └── index.ts
|   |   |   ├── Queen
│   │   │   |   └── index.ts
|   |   |   ├── Rook
│   │   │       └── index.ts
│   │   ├── Spot
│   │   │   ├── index.ts
│   │   │   └── spot.interface.ts
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