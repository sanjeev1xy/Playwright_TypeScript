import { test, expect } from "@playwright/test";

test("Get User", async ({ request }) => 
{
    const response = await request.get("https://reqres.in/api/users?page=2",
        {
            headers: 
            {
                "x-api-key": "free_user_3ED9dIcjTMQbRmi8Nk72WYQXkT7"
            }
        }
    );
    console.log(await response.json());
    expect(response.status()).toBe(200);
});