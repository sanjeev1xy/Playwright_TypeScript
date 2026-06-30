import { test, expect } from "@playwright/test";

test("Create User", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", 
        {
        headers: 
        {
            "x-api-key": "free_user_3ED9dIcjTMQbRmi8Nk72WYQXkT7",
            "Accept": "application/json"
        },

        data: 
        {
            name: "sanjeev",
            job: "trainer"
        }
    }
);

    console.log(await response.json());
    expect(response.status()).toBe(201);
});