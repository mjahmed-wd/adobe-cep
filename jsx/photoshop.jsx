function evalFile(path) {
    try {
        $.evalFile(path);
    } catch (e) {
        alert("Exception:" + e);
    }
}

// Parse the Object that comes from JS
function JSXParseObj(o) {
    var str = "Object received!\n";
    for (prop in o) {
        str += prop + " [" + typeof o[prop] + "]: " + o[prop] + ".\n";
    }
    alert(str);
}

// Create an object and return the
// JSON stringified version of it
function sendObjectToJS() {
    var obj
        =
    {
        str
            : "Tom and Jerry"
        ,
        num
            : 42
        ,
        today
            : new Date(),
        nestedObj
            :
        {
            nestedStr
                : "Mehliana"
            ,
            nestedNum
                :
                8
            ,
            nestedDate
                : new Date()

        }

    }
    return JSON.stringify(obj);

}