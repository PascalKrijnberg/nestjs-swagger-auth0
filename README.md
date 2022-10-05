## Description

A [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository with both Auth0 and Swagger authentication integrated.

During my research into using Auth0 with NestJS I ran into the issue on how to test the API during development without depending on a Front End implementation. Normally, the user accounts are within my application and creating a bearer token for accessing Swagger is easily done. Since the whole user management with Auth0 is outsourced, it was a bit harder to found out how to get Swagger work with auth0. This turned out to be simple with Auth0 as well, with some simple configuration in the Swagger Document properties. Since there is little to no documentation to be found, I am sharing this knowledge in the hope it will help other as well that are seeking the same solution.

You can check out this project and fully test it with the help of a free Auth0 account.

The application provides a guard and jwt strategy to implement Auth0 and includes a number of endpoints for testing.

If you need help to set up, feel free to reach out!

Cheers!
[Pascal Krijnberg](https://snapworks.nl)

## Installation

```bash
$ npm install
```

## Auth0 Configuration

This nest application has a couple of endpoints that are secured with Auth0. Therefor to make it work an auth0 
account with Application and API needs to be configured. On the Auth0 blog there is a very detailed tutorial how to set 
up this basic stuff. 

https://auth0.com/blog/developing-a-secure-api-with-nestjs-adding-authorization/

To set up a correct callback from Auth0 to Swagger you have to set the allowed callback URL in 
the Auth0 Application configuration. This is an integrated page in Swagger that will handle the token.

### Allowed Callback URLs
```
http://127.0.0.1:8008/docs/oauth2-redirect.html
```

### .env 

```bash
AUTH0_DOMAIN=
AUTH0_AUDIENCE=
```

## Swagger

To set automatically the client_id in the Swagger interface you can set the client variable in the .env file. 
This client_id can be found in the auth0 configuration of your API configuration on Auth0.

```bash
AUTH0_OAUTH_CLIENT_ID=
```

Swagger will be avalable on http://127.0.0.1:8008/docs/# and authorization will be through OAuth2.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)
- Me - [Pascal Krijnberg](https://snapworks.nl)

## License

Nest is [MIT licensed](LICENSE).
