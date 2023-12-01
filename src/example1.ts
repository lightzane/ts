interface CommonResult {
  id: string;
}

/*
 * Discriminators must be a LITERAL type (not generic)
 */

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
