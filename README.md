# Pokédebe
A little React app to search and bookmark Pokémon for my son Enric, currently WIP.

It uses the great [Pokéapi](https://pokeapi.co/) by [Paul Hallett](http://github.com/phalt) and [Zane Adickes](http://github.com/zaneadix).

## Prerequisites

- [node.js](https://nodejs.org) >= 6 is required
- You want to have [yarn](https://yarnpkg.com) installed globally in your sistem ([How to install it](https://yarnpkg.com/en/docs/install))

## Installation

*  `$ git clone git@github.com:martincleto/pokedebe.git`
or alternatively `$ git clone https://github.com/martincleto/pokedebe.git`
* Into the folder you have downloaded this repository in your file system, run `$ yarn install`
* To run the tests, type `$ yarn test`

## Usage

* `$ yarn start` creates a development build and starts a web server at <http://localhost:8080/>
* `$ yarn run build` generates a production build
* `$ yarn run serve` starts a basic node server with the actual build files for production at <http://localhost:3000/>

## TODO List

- [ ] Styles
- [ ] Server
- [ ] App deployment task

## Nice to have

### UI
- Better Pokemon detail info including image
- Save favorite (Core User)

### Core
- Implement Flux
- User
  - Login
  - Save favorite
