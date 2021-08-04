## jwt

Cloned from https://github.com/jsonwebtoken/jsonwebtoken.github.io, Kept it simple

<img src="https://cdn.auth0.com/blog/jwtio/jwtio.png"/>

### How to build

First, install the required dependencies:

```sh
npm install
```

In order to build (and run) the project execute:

```sh
./node_modules/.bin/grunt
```

You will find the generated files in the `dist` directory. For the website, you can run a server at its root. For example: `http-server dist/website`. The default `grunt` task runs a server at [https://127.0.0.1:8000](https://127.0.0.1:8000) and watches for changes.
