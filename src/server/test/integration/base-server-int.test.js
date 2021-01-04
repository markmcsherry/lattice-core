const supertest  = require("supertest"); // supertest is a framework that allows to easily test web apis
const app = require("../../base_routes"); //import file we are testing
const request = supertest(app);

describe("Server Integration tests - test main GET routes", () => {

  it('default route', async () => {
    const response = await request.get(`/`);
    expect(response.text).toBe('Not Implemented');    
    expect(response.status).toBe(200);
  })

  it('test route', async () => {
    const response = await request.get(`/test`);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
//    console.log(response);
  });

 });




