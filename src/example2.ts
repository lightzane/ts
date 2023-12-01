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
