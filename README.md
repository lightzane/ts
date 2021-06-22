# TS

<p>
    <img src="https://img.shields.io/badge/typescript-4.3.4-blue"/>
    <img src="https://img.shields.io/badge/nodemon-2.0.7-green"/>
    <img src="https://img.shields.io/badge/rimraf-3.0.2-red"/>
</p>

My mini playground locally for [Typescript](https://www.typescriptlang.org/).<br>
The other (2) node packages supports the development:<br>

**Nodemon** - to watch the file changes and automatically restart node<br>
**Rimraf** - to clean the dist folder

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
npm install -D typescript nodemon rimraf
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
        "start:dev": "nodemon --ext ts --exec \"rimraf dist/**/* && npm start || exit 1\""
    }
}
```

-   `tsc` - will build the `.ts` files out from `.js` files<br>
-   `node { path/to/file }` - tells node to execute this `.js` file<br>
-   `nodemon --ext ts` - tells nodemon to watch a specific file with an extension of `ts`<br>
-   `nodemon --exec { command }` - tells nodemon to execute this command<br>
-   `rimraf { path/to/folder }` - clean the folder by deleting all the files inside<br>
-   **|| exit 1** - add this to the end of command so `nodemon` will keep running if there are errors in your code.

## References

-   https://www.typescriptlang.org/
-   https://nodemon.io/
-   https://www.npmjs.com/package/rimraf
