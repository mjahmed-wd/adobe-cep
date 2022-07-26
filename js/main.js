(function () {
    'use strict';

    var csInterface = new CSInterface();

    
    var obj = {
        str: "Snarky Puppy",
        num: 42,
        today: new Date(),
        nestedObj: {
            nestedStr: "Mehliana",
            nestedNum: 8,
            nestedDate: new Date()
        }
    };

    
    document.getElementById('btn_test').addEventListener('click', function () {
        csInterface.evalScript('JSXParseObj(' + JSON.stringify(obj) + ')');
    });

    var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/";

    // for single file
    csInterface.evalScript('evalFile("' + extensionRoot + 'anotherFile.jsx")',
        function (res) {
            console.log(res)
        });


    // for multiple file
    csInterface.evalScript('evalFiles("' + extensionRoot + '")', function (res) {
        console.log(res)
    });





}());