# ExpressTS Server Sample Project

This project should serve as a template for building Express APIs very quickly. It is intended to be used with React, Angular, or any other built UI frameworks (i.e., not templating... yet).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Here are some global npm commands needed to develop with this project.

```
npm i -g eslint
npm i -g tsc
npm i -g mocha

npm i pg # or other DB node drivers required
```

Also, copy [.env.example](.env.example) to a file named [.env](.env) and fill out all the empty fields.

### Installing & Running

Provided the [.env](.env) is made, run the following command.

```
npm i
npm run start
```

## Testing

Provided the [.env](.env) is made, run the following command.
 
```
npm run test
# or npm run coverage 
```

### Static Code Analysis

These will ensure your code is consistently styled, but you can tweak the style rules in [.eslintrc.js](.eslintrc.js). The ESLint website can provide explanations for rules [here](https://eslint.org).

```
npm run lint:fix # or just lint
```

## Deployment

To build and run on multiple threads, use the following commands:

```
npm run build
npm run start:multicore
```

## App Structure

The structure can best be described in layers: models, services and routes.

* [Routes](src/routes): are responsible for creating Express routers which transform HTTP request into service calls, which is usually done by pulling values out of the request object.
* [Services](src/services): are responsible for accepting calls from the `Route` layer and preforming data validation on the input, and throwing protocol-agnostic errors (for example, if a User is not found, the service layer does not throw HttpNotFound, but rather NotFound)
* [Models](src/models): are responsible for transforming objects into database entries, and querying those objects out (which in this projec, is done via [TypeORM](https://typeorm.io/))

Some other helpful notes:

* [Trace](src/middleware/trace.middleware.ts): injects a trace UUID into every Request attached as `req.trace` which allows you to link several logs within a single call together
* [Settings](src/config/settings.config.ts): pulls values from all `.env` files through one module and parses/transforms them into the correct data types
* [Errors](src/errors): any of these errors can be thrown at any level, and will be transformed appropriately into HTTP-specific error codes

## Built With

* [Node](https://nodejs.org/en/) - JS Runtime
* [Typescript](https://www.typescriptlang.org) - Programming Language, superset of JavaScript
* [Express](https://expressjs.com) - Web Framework
* [TypeORM](https://typeorm.io/) - Typed ORM for Typescript
* [Eslint](http://eslint.org) - Static Code Analysis
* [Mocha](http://mochajs.org) - Test Runner
* [Chai](https://www.chaijs.com) - Assertion Library

## Contributing

PRs are always welcome.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Christopher McDonald** - *All work* - [Github](https://github.com/ChristopherMcDonald)

## License

This project is licensed under the GNU General Public License v2.0 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* My Dog
