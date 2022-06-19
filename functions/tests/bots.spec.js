import app from './app';
import request from 'supertest';



describe("GET /v1/bots/:zone_id", () => {
    test("Get bot by zone id shuld response with 200 status code", async () => {
        const response = await request(app).get('/v1/bots/7juw2rwN9ZUUc9dA8yvX').send();
        expect(response.statusCode).toBe(200);
    });

    test("Get bot by zone id shuld response with 200 status code and empy array", async () => {
        const response = await request(app).get('/v1/bots/eexxample').send();
        expect(response.body).toBeInstanceOf(Array);
    });

    test("Get bot by zone id shuld have a content-type: application/json in header", async () => {
        const response = await request(app).get('/v1/bots/7juw2rwN9ZUUc9dA8yvX').send();
        expect(response.header["content-type"]).toEqual(expect.stringContaining("json"));
    });

})
