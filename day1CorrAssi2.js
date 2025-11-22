
const browserVersion= "Chrome"

function getBrowserVersion()
{

    if (browserVersion == "Chrome")
    {
        // let currentVersion= "Chrome 2.0"  It will throw an error. Because it is block scoped
         
        var currentVersion= "Chrome 2.0" // It will work because var is not block scoped
    }
     
        console.log("The browser Version is "+currentVersion)

}

getBrowserVersion();



