const HTTP_SUCCESS_CODE:number = 200;

export const serviceFunction = (request, response) => {
  response.status(HTTP_SUCCESS_CODE).send('Hello World!');
};


export const serviceFunction2 = (request, response) => {
  response.status(HTTP_SUCCESS_CODE).send('Hello World 2 !');
};
