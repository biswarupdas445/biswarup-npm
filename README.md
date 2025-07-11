biswarup-npm
=========
[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![Node.js][NODE VERSION BADGE]][NODE PAGE]
[![GitHub License][LICENSE BADGE]][LICENSE PAGE]
[![CI Status][CI BADGE]][CI PAGE]

A lightweight and handy Node.js utility library for common tasks such as string formatting, date manipulation, object checking, sleep function, and more.

---

## ✨ Features

- 🔧 Type and value checks (e.g., `isEmpty`, `isObject`)
- 📆 Date formatting and parsing
- 🧹 String manipulation
- 🔁 Array and object utilities
- 🪶 Lightweight with no external dependencies

---

Install
-------
```shell
npm install biswarup-npm
```
or with yarn:

```shell
yarn add biswarup-npm
```


Usage
-----
**NOTE**: This library exports both [CJS](https://nodejs.org/api/modules.html) and [ESM](https://nodejs.org/api/esm.html) modules.

### Sleep Function (Utility)
```javascript
let bn = require('biswarup-npm');

async function main() {
    console.log("Result: ", bn.helloNpm());
    await bn.sleep(10000); // time in milliseconds.
    console.log("Result: ", bn.helloNpm());
}

main();

```

### randomInt (Utility)
```javascript
let bn = require('biswarup-npm');

async function main() {
    console.log("Result: ", bn.randomInt()); // without range.
    console.log("Result: ", bn.randomInt(1,10)); //with range.
}

main();

```

### randomFloat (Utility)
```javascript
let bn = require('biswarup-npm');

async function main() {
    console.log("Result: ", bn.randomFloat()); // without range.
    console.log("Result: ", bn.randomFloat(1,10)); // with range.
}

main();

```

### validateEmail (Utility)
```javascript
let bn = require('biswarup-npm');

async function main() {
    console.log("Result: ", bn.validateEmail('biswarup@gmail.com')); // Result:  true
    console.log("Result: ", bn.validateEmail('biswarup@com')); // Result:  false
}

main();

```

### capitalize (String-Utility)
```javascript
let bn = require('biswarup-npm');

async function main() {
    console.log("Result: ", bn.capitalize("hello, world!")); // Result: "Hello, World!"
}

main();

```

### camelize (String-Utility)
```javascript
let bn = require('biswarup-npm');

async function main() {
    // all output "variableClassName"
    console.log(bn.camelize("VariableClass name")); // variableClassName
    console.log(bn.camelize("Variable className")); // variableClassName
    console.log(bn.camelize("variable class name")); // variableClassName
    console.log(bn.camelize("Variable Class Name")); // variableClassName
}

main();

```


### TypeScript (Advanced)
```typescript
import readme, { type ReadmeConfig } from 'biswarup-npm';

const config: ReadmeConfig = {
    pkg: {
        name: 'my-awesome-package',
        description: 'An awesome package.',
        type: 'module',
        license: 'MIT',
        scripts: {
            test: 'jest'
        },
        engines: {
            yarn: '1.x'
        }
    },
    additionalSections: [
        {
            position: 'before:Install',
            title: 'Greetings',
            body: 'Hello world!'
        }
    ],
    badges: [
        {
            alt: 'Build Status',
            image: 'https://img.shields.io/github/actions/workflow/status/jbenner-radham/node-readme-md/ci.yaml?branch=main&logo=github&style=flat',
            link: 'https://github.com/jbenner-radham/node-readme-md/actions/workflows/ci.yaml'
        }
    ],
    licenseLink: 'LICENSE'
};

readme(config);
// > my-awesome-package
// > ==================
// > [![Build Status](https://img.shields.io/github/actions/workflow/status/jbenner-radham/node-readme-md/ci.yaml?branch=main&logo=github&style=flat)](https://github.com/jbenner-radham/node-readme-md/actions/workflows/ci.yaml)
// >
// > An awesome package.
// >
// > Greetings
// > ---------
// > Hello world!
// >
// > Install
// > -------
// > ```sh
// > yarn add my-awesome-package # Or alternatively: `npm install my-awesome-package`
// > ```
// >
// > Usage
// > -----
// > ```js
// > import myAwesomePackage from 'my-awesome-package';
// > ```
// >
// > Testing
// > -------
// > ```sh
// > yarn test # Or alternatively: `npm test`
// > ```
// >
// > License
// > -------
// > The MIT License. See the [license file](LICENSE) for details.
```

API
---
```typescript
import type { PackageJson } from 'type-fest';

/**
 * Generates a readme document based upon the provided config.
 */
export default function readme(config?: ReadmeConfig): string;

export interface ReadmeConfig {
    /**
     * Additional sections to add to the readme.
     */
    additionalSections?: Section[];

    /**
     * Badges to add to the readme.
     */
    badges?: Badge[];

    /**
     * Add a hero image to the readme, below the description.
     */
    heroImage?: HeroImage;

    /**
     * While the license is derived from the `pkg.license` option this specifies
     * a link target to the license itself. If defined as `true` it will default
     * to setting the link target to "LICENSE". Please note that if
     * `pkg.license` is not defined this setting will have no effect.
     */
    licenseLink?: boolean | string;

    /**
     * The contents of a `package.json` to parse to generate the readme.
     */
    pkg?: PackageJson;

    /**
     * Whether the package should be shown as being installed as a dev
     * dependency in the "Install" section of the readme. Defaults to `false`.
     */
    preferDev?: boolean;

    /**
     * The package manager used in the "Install" and "Testing" sections defaults
     * to npm. However, this can be changed by specifying a package manager
     * (pnpm, Yarn) in `pkg.engines`. If desired set this to `true` to override
     * any package manager specified and utilize npm. Defaults to `false`.
     */
    preferNpm?: boolean;

    /**
     * Whether the example code in the "Usage" section should be terminated by
     * semicolons. Defaults to `true`.
     */
    preferSemicolons?: boolean;

    /**
     * The type of quotes used in the "Usage" section. Defaults to single
     * quotes.
     */
    quoteType?: 'double' | 'single';

    /**
     * Override any of the default generated sections.
     */
    sectionOverrides?: SectionOverrides;
}

export interface Section {
    /**
     * The position of the section in the readme. If not specified the section
     * will be appended onto the end of the readme. If a number is specified it
     * can be either positive or negative.
     */
    position?: number | PositionDirective;

    /**
     * The title of the section.
     */
    title: string;

    /**
     * The section body. If not specified it will default to the placeholder
     * text.
     */
    body?: string;
}

export interface HeroImage {
    /**
     * The image alt tag.
     */
    alt: string;

    /**
     * The image URL or path.
     */
    src: string;
}

/**
 * A `PositionDirective` is a string which begins with either "before:" or
 * "after:" and the section title to search for.
 *
 * @example
 * { position: 'after:Install' }
 * @example
 * { position: 'before:License' }
 */
export type PositionDirective = string;

export interface Badge {
    /**
     * The image alt tag.
     */
    alt: string;

    /**
     * The image URL.
     */
    image: string;

    /**
     * The link target of the image.
     */
    link: string;
}

export interface SectionOverrides {
    /**
     * Override for the "Install" section body text.
     */
    install?: string;

    /**
     * Override for the "Usage" section body text.
     */
    usage?: string;

    /**
     * Override for the "Testing" section body text.
     */
    testing?: string;

    /**
     * Override for the "License" section body text.
     */
    license?: string;
}
```


Testing
-------
```shell
yarn test # Or alternatively: `npm test`
```

See Also
--------
- [utility-cli @ npm](https://www.npmjs.com/package/utility-cli)

License
-------
The MIT License. See the [license file](LICENSE) for details.

[CI BADGE]: https://github.com/jbenner-radham/node-readme-md/actions/workflows/ci.yaml/badge.svg
[CI PAGE]: https://github.com/jbenner-radham/node-readme-md/actions/workflows/ci.yaml
[LICENSE BADGE]: https://img.shields.io/badge/license-MIT%20License-blue.svg
[LICENSE PAGE]: https://github.com/jbenner-radham/node-readme-md/blob/master/LICENSE
[NODE PAGE]: https://nodejs.org/
[NODE VERSION BADGE]: https://img.shields.io/node/v/readme-md.svg
[NPM PAGE]: https://www.npmjs.com/package/readme-md
[NPM VERSION BADGE]: https://img.shields.io/npm/v/readme-md.svg
