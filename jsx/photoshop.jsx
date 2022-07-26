function sayHello(str, num) {
    alert("Photoshop says: " + str + "! Have a great " + num + ".");
}

function evalFile(path) {
    try {
        $.evalFile(path);
    } catch (e) {
        alert("Exception:" + e);
    }
}


function JSXParseObj(o) {
    var str = "Object received!\n";
    for (prop in o) {
        str += prop + " [" + typeof o[prop] + "]: " + o[prop] + ".\n";
    }
    alert(str);
}

function evalFiles(jsxFolderPath) {
    var folder = new Folder(jsxFolderPath);
    if (folder.exists) {
        var jsxFiles = folder.getFiles("*.jsx");
        for (var i = 0; i < jsxFiles.length; i++) {
            var jsxFile = jsxFiles[i];
            try {
                $.evalFile(jsxFile);
            } catch (e) {
                alert(e.message + "\n" + jsxFile);
            }
        }
    }
}

var actionFile = csInterface.getSystemPath(SystemPath.EXTENSION) + "/action/demo\
 Action.atn";
var actionSetName = 'HTML Panels Development Actions'; var runAction = function (actionName, actionSet) {
    csInterface.evalScript("app.doAction('" + actionName + "', '" + actionSet + "'\ )", function (res) {
        if (EvalScript_ErrMessage == res) {
            // something went wrong!
            csInterface.evalScript("loadActionSet('" + actionFile + "', '" + actionSetName + "')");
        }
    })
}

$('#action1').on('click', function (evt) {
    runAction('First action', actionSetName);
});
$('#action2').on('click', function (evt) {
    runAction('Second action', actionSetName);
});