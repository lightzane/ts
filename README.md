# TS

<p>
    <img src="https://img.shields.io/badge/typescript-4.5.4-blue"/>
    <img src="https://img.shields.io/badge/nodemon-2.0.16-green"/>
    <img src="https://img.shields.io/badge/ts--node-10.4.0-red"/>
    <img src="https://img.shields.io/badge/jest-27.0.6-red"/>
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
npm install -D typescript nodemon
```

Install also [Jest](https://jestjs.io/)

```
npm install -D jest @types/jest ts-jest
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
  },
  "exclude": ["**/*.spec.ts"]
}
```

Add these scripts in `package.json`

```json
{
  "scripts": {
    "start": "tsc && node dist/main",
    "start:dev": "nodemon src/main.ts",
    "build": "tsc",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "jest": {
    "clearMocks": true,
    "collectCoverage": false,
    "coverageDirectory": "coverage",
    "coverageProvider": "v8",
    "testMatch": ["**/*.spec.ts", "*.spec.ts"],
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    }
  }
}
```

- `tsc` - will build the `.ts` files out from `.js` files<br>
- `node { path/to/file }` - tells node to execute this `.js` file<br>

## References

- https://jestjs.io/
- https://www.typescriptlang.org/
- https://nodemon.io/
