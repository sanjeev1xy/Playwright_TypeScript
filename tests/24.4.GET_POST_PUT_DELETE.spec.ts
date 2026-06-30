import { test, expect } from "@playwright/test";

let userid: string;

// ================= GET USER =================

test("Get User", async ({ request }) => 
{
    const response = await request.get("https://reqres.in/api/users?page=2",
        {
            headers:
            {
                "x-api-key": "free_user_3ED9dIcjTMQbRmi8Nk72WYQXkT7",
                "Accept": "application/json"
            }
        }
    );
    const res = await response.json();
    console.log("GET USER RESPONSE");
    console.log(res);
    expect(response.status()).toBe(200);
});

// ================= CREATE USER =================

test("Create User", async ({ request }) => 
{
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
    const res = await response.json();
    console.log("CREATE USER RESPONSE");
    console.log(res);
    userid = res.id;
    expect(response.status()).toBe(201);
});

// ================= UPDATE USER =================

test("Update User", async ({ request }) => 
{
    const response = await request.put("https://reqres.in/api/users/" + userid,
        {
            headers: 
            {
                "x-api-key": "free_user_3ED9dIcjTMQbRmi8Nk72WYQXkT7",
                "Accept": "application/json"
            },

            data: 
            {
                name: "sanjeev updated",
                job: "senior trainer"
            }
        }
    );
    const res = await response.json();
    console.log("UPDATE USER RESPONSE");
    console.log(res);
    expect(response.status()).toBe(200);
});

// ================= DELETE USER =================

test("Delete User", async ({ request }) => 
{
    const response = await request.delete("https://reqres.in/api/users/" + userid,
        {
            headers: 
            {
                "x-api-key": "free_user_3ED9dIcjTMQbRmi8Nk72WYQXkT7",
                "Accept": "application/json"
            }
        }
    );
    console.log("DELETE USER STATUS");
    console.log(response.status());
    expect(response.status()).toBe(204);
});