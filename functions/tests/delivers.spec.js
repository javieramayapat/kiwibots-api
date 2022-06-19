import app from './app';
import  request from 'supertest';



describe("GET /v1/delivers/:id", () => {
    test("Get delivers by id shuld response with 200 status code", async() => {
        const response = await request(app).get('/v1/delivers/Ea3mlk6GyZ2aqaj5fg85').send();
        expect(response.statusCode).toBe(200);
    })

    test("Get delivers by id shuld response with 200 status code and empty array", async() => {
        const response = await request(app).get('/v1/delivers/eexxample').send();
        expect(response.body).toBeInstanceOf(Array);
    })

    test("Get delivers by id shuld have a content-type: application/json in header", async () => {
        const response = await request(app).get('/v1/delivers/Ea3mlk6GyZ2aqaj5fg85').send();
        expect(response.header["content-type"]).toEqual(expect.stringContaining("json"));
    });

})
