const supertest  = require("supertest"); // supertest is a framework that allows to easily test web apis
const express = require("express"); // import express
const app = require("../../core_routes"); //import file we are testing
const request = supertest(app);

describe("Server Integration tests - test main GET routes", () => {

  it('default route', async () => {
    const response = await request.get(`/`);
    expect(response.status).toBe(404);
  })

  it('test route', async () => {
    const response = await request.get(`/test`);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
//    console.log(response);
  });

 });

 describe("Server Integration tests - test api GET routes", () => {

  it('test user good', async () => {
    const response = await request.get(`/api/user/1`);
//    console.log(response);    
    expect(response.status).toBe(200);
    expect(response.body.user).toBe('silly sid'); 
//    expect('Content-Type', /json/);
//    expect(response.header.content-length).toBe('20');
  });

  it('test user bad', async () => {
    const response = await request.get(`/api/user/0`);
    expect(response.status).toBe(404);
//    console.log(response);    
  });

 });


