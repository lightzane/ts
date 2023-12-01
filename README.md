# Discriminator Unions

Learning a topic from Typescript.

**Discriminators must be a LITERAL type (not generic)**

Example:

```ts
type Result = {
  success: true; // Literal
};

type Result = {
  success: false; // Literal
};

type Result = {
  success: boolean; // Generic
};
```

## Example 1

```ts
interface CommonResult {
  id: string;
}

interface SuccessResult extends CommonResult {
  success: true; // Discriminator
  data: unknown;
}

interface ErrorResult extends CommonResult {
  success: false; // Discriminator
  error: string;
}

type Result = SuccessResult | ErrorResult;

const resultA: Result = {
  id: '1',
  success: true,
  data: 'Something successful data',
};

const resultB: Result = {
  id: '2',
  success: false,
  error: 'Sample error...',
};

console.log(resultA.data); // autocomplete will never contain "error"
console.log(resultB.error); // autocomplete will never contain "data"

export const Example1 = () => {
  ((result: Result) => {
    let data: any;

    switch (result.success) {
      case true:
        data = result.data; // * PASS
        // result.error // ! error
        break;
      case false:
        // result.data // ! error
        data = result.error; // * PASS
        break;
    }

    console.log(data, '-- Result from IIFE');
  })(resultA);
};
```

## Example 2

```ts
interface LoadingResult {
  state: 'loading';
}

interface SuccessResult {
  state: 'success';
  data: string;
}

interface ErrorResult {
  state: 'error';
  error: string;
}

type Result = LoadingResult | SuccessResult | ErrorResult;

const resultA: Result = {
  state: 'success',
  data: 'Successful result',
};

export const Example2 = () => {
  ((result: Result) => {
    switch (result.state) {
      case 'loading':
        // result.data // ! error
        // result.error // ! error
        break;
      case 'error':
        // result.data // ! error
        result.error; // * PASS
        break;
      case 'success':
        result.data; // * PASS
        // result.error // ! error
        break;
    }
  })(resultA);
};
```

## Other References

- https://dev.to/darkmavis1980/what-are-typescript-discriminated-unions-5hbb
