const supertest  = require("supertest"); // supertest is a framework that allows to easily test web apis
const app = require("../../core_routes"); //import file we are testing
const request = supertest(app);

describe("Server Integration tests - test api GET routes", () => {

  it('test user good', async () => {
    const response = await request.get(`/api/user/1`);
//    console.log(response);    
    expect(response.status).toBe(200);
    expect(response.body.user).toBe('silly sid'); 

  });

  it('test user bad', async () => {
    const response = await request.get(`/api/user/0`);
    expect(response.status).toBe(404);
  });

});


