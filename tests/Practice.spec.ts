import {test,expect} from "@playwright/test";

test("Delete User",async({request})=>
{
    const response=await request.delete("https://reqres.in/api/users/2",
        {
            headers:
            {
                "x-api-key":"free_user_3ED9dIcjTMQbRmi8Nk72WYQXkT7",
                "Accept":"application/json"
            }
        }
    );
    console.log(response.status());
    expect(response.status()).toBe(204);
}
)