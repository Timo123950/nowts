# NowTS

_This work is in progress_

## Installation

yarn

```ts
yarn add @nowts/core
```

npm

```ts
npm install --save @nowts
```

## Get Started

```ts
import * as bodyParser from "body-parser";
import * as express from "express";
import {
  NowModule,
  Injectable,
  newExpressDecorator,
  RestController,
} from "@nowts/core";

@Injectable()
class User implements RestController {
  constructor() {}

  async create(id, data, params) {
    console.log(params.query);
    data.createdAt = Date.now();
    return data;
  }
}

const app = express();
const now = new NowModule({
  services: [User],
  controllerBindings: [rest.bindController("/users", User)],
  controllerDecorators: [
    newExpressDecorator(bodyParser.urlencoded({ extended: false })),
    newExpressDecorator(bodyParser.json()),
  ],
});
app.use(now.expressRouter());
app.listen(3000, () => console.log("Listening ..."));
```

## Documentation

Find docs [here]().

## Contributing

There are several way to contribute.

- Submit a PR to fix typos/grammatical errors.
- Open an issue to report a bug.
- Open an issue to suggest a new feature.
- Improve the docs.

## Packages

- [@nowts/cli]()
- [@nowts/common]()
- [@nowts/sequelize]()

## License

MIT
