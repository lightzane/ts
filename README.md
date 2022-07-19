# TS

<p>
    <img src="https://img.shields.io/badge/typescript-4.5.4-blue"/>
    <img src="https://img.shields.io/badge/nodemon-2.0.16-green"/>
    <img src="https://img.shields.io/badge/ts--node-10.4.0-blue"/>
</p>

My mini playground locally for [Typescript](https://www.typescriptlang.org/).<br>
The other (2) node packages supports the development:<br>

**nodemon** - to watch the file changes and automatically restart node<br>
**ts-node** - requires by nodemon to watch file changes specific to Typescript files

## Run this Project

```
npm install
npm start
```

## Create this Project from Scratch

### Initialize the project in (3) steps

1. Create a folder to be your project directory
2. Initialize npm

```
npm init -y
```

3. Create a `src` folder and `src/main.ts`<br>

Install the dev dependencies

```
npm install -D typescript nodemon ts-node @types/node
```

Initialize the `tsconfig.json` file

```
npx tsc --init
```

Keep the defaults and add `outDir` to save your generated `.ts` files here
**tsconfig.json**

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist"
  }
}
```

Add these scripts in `package.json`

```json
{
  "scripts": {
    "start": "tsc && node dist/main",
    "start:dev": "nodemon src/main.ts --watch src",
    "build": "tsc"
  }
}
```

- `tsc` - will build the `.ts` files out from `.js` files<br>
- `node { path/to/file }` - tells node to execute this `.js` file<br>

## Optional (Eslint)

https://eslint.org/docs/latest/user-guide/getting-started

1. `npm init @eslint/config`

```
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
```

√ How would you like to use ESLint? **problems**

√ What type of modules does your project use? **esm**

√ Which framework does your project use? **none**

√ Does your project use TypeScript? **yes**

√ Where does your code run? **node**

√ What format do you want your config file to be in? **Javascript**

? Would you like to install them now with npm? **Yes**

```
? How would you like to use ESLint? ...
  To check syntax only
> To check syntax and find problems
  To check syntax, find problems, and enforce code style
```

```
? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
```

```
? Which framework does your project use? ...
  React
  Vue.js
> None of these
```

```
? Does your project use TypeScript? » No / Yes
```

```
? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
√ Node
```

```
? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON
```

```
@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
√ Would you like to install them now with npm? · No / Yes
Installing @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest, eslint@latest
```

**Update** the following `scripts` in **package.json**

```json
"scripts": {
  "start:dev": "nodemon src/main.ts --watch src --exec \"npm run lint && nodemon\"",
  "lint": "eslint {src,test}/**/*.ts",
  "lint:fix": "eslint {src,test}/**/*.ts --fix"
}
```

Note: For `Windows` add `\"` to escape the double-quotes

## References

- https://www.typescriptlang.org/
- https://nodemon.io/
- https://eslint.org/docs/latest/user-guide/getting-started
