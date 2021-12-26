# TS

<p>
    <img src="https://img.shields.io/badge/typescript-4.5.4-blue"/>
    <img src="https://img.shields.io/badge/nodemon-2.0.15-green"/>
    <img src="https://img.shields.io/badge/ts-node-10.4.0-blue"/>
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
        "outDir": "./dist"
    }
}
```

Add these scripts in `package.json`

```json
{
    "scripts": {
        "start": "tsc && node dist/main",
        "start:dev": "nodemon src/main.ts"
    }
}
```

-   `tsc` - will build the `.ts` files out from `.js` files<br>
-   `node { path/to/file }` - tells node to execute this `.js` file<br>

## References

-   https://www.typescriptlang.org/
-   https://nodemon.io/
