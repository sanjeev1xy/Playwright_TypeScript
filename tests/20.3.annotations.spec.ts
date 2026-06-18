/*
only
skip
fail
fixme
slow
*/

import { test, expect } from '@playwright/test';

//only
//test.only("test1",async({page})=>
//{
  //  console.log("this is teast1");
//});


/*//skip
test.skip("test2",async({page})=>
{
    console.log("this is teast2");
})
*/
/*
test("test3",async({page,browserName})=>
{
    console.log("this is teast3");
    if(browserName==="chromium")
    {
        test.skip();
    }
})
*/
/*
//Fixedme
test("test4",async({page})=>
{
    test.fixme();
    console.log("this is teast4.....");
})
*/
//Fail
/*
test("test5",async({page})=>
{
    test.fail(); //exp
    console.log("this is teast5.....");
    ecpect(1).toBe(2); //if both expe & Actual is failed then test pass
})
*/
/*
test("test6",async({page,browserName})=>
{
    console.log("this is teast6.....");
    if(browserName==="chromium")
    {
        test.fail();  //exp
    }
})
*/

//slow()
test("test7",async({page})=>
{
    //test.slow();
    test.setTimeout(7000);
    console.log("this is teast7");
    await page.goto("https://www.demoblaze.com/index.html");
});
