import { test, expect } from "@playwright/test";

test("Update User", async ({ request }) => 
{
    const response = await request.put("https://reqres.in/api/users/2",
        {
            headers: 
            {
                "x-api-key": "free_user_3ED9dIcjTMQbRmi8Nk72WYQXkT7",
                "Accept": "application/json"
            },

            data: 
            {
                "name": "sanjeev updated",
                "job": "senior trainer"
            }
        }
    );
    console.log(await response.json());
    expect(response.status()).toBe(200);
});