import React from "react";

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}



function lastCreditForm()
{
    var randNum = getRandomInt(5);
    switch (randNum)
    {
        case 0:
            document.getElementById('form').innerHTML =
                '<h4>Question 1</h4>' +
                '<div class="card text-center">\n' +
                '  <div class="card-header">\n' +
                '    How long did The Beatles last together as a band?\n' +
                '  </div>\n' +
                '  <ul class="list-group list-group-flush">\n' +
                '    <li class="list-group-item">A) 9 years</li>\n' +
                '    <li class="list-group-item">B) 10 years</li>\n' +
                '    <li class="list-group-item">C) 8 years</li>\n' +
                '    <li class="list-group-item">D) 11 years</li>\n' +
                '  </ul>\n' +
                '</div>' +
                '<form>\n' +
                '  <div class="form-group">\n' +
                '    <label for="exampleFormControlSelect1">Select your answer</label>\n' +
                '    <select class="form-control" id="exampleFormControlSelect1">\n' +
                '      <option value="1">A</option>\n' +
                '      <option value="2">B</option>\n' +
                '      <option value="3">C</option>\n' +
                '      <option value="4">D</option>\n' +
                '    </select>\n' +
                '  </div>\n' +
                '</form>';
            break;
        case 1:
            document.getElementById('form').innerHTML =
                '<h4>Question 2</h4>' +
                '<div class="card text-center">\n' +
                '  <div class="card-header">\n' +
                '    Out of all of these classic albums, which one is the best selling album of ALL TIME?\n' +
                '  </div>\n' +
                '  <ul class="list-group list-group-flush">\n' +
                '    <li class="list-group-item">A) Dark Side of the Moon (Pink Floyd - 1973)</li>\n' +
                '    <li class="list-group-item">B) Thriller (Michael Jackson - 1982)</li>\n' +
                '    <li class="list-group-item">C) Bad (Michael Jackson - 1987)</li>\n' +
                '    <li class="list-group-item">D) Rumours (Fleetwood Mac - 1977)</li>\n' +
                '  </ul>\n' +
                '</div>' +
                '<form>\n' +
                '  <div class="form-group">\n' +
                '    <label for="exampleFormControlSelect1">Select your answer</label>\n' +
                '    <select class="form-control" id="exampleFormControlSelect1">\n' +
                '      <option value="1">A</option>\n' +
                '      <option value="2">B</option>\n' +
                '      <option value="3">C</option>\n' +
                '      <option value="4">D</option>\n' +
                '    </select>\n' +
                '  </div>\n' +
                '</form>';
            break;
        case 2:
            document.getElementById('form').innerHTML =
                '<h4>Question 3</h4>' +
                '<div class="card text-center">\n' +
                '  <div class="card-header">\n' +
                '    Which one of these songs is Whitney Houston\'s most played song on Spotify?\n' +
                '  </div>\n' +
                '  <ul class="list-group list-group-flush">\n' +
                '    <li class="list-group-item">A) I Will Always Love You</li>\n' +
                '    <li class="list-group-item">B) Higher Love</li>\n' +
                '    <li class="list-group-item">C) How Will I Know</li>\n' +
                '    <li class="list-group-item">D) I Wanna Dance with Somebody (Who Loves Me)</li>\n' +
                '  </ul>\n' +
                '</div>' +
                '<form>\n' +
                '  <div class="form-group">\n' +
                '    <label for="exampleFormControlSelect1">Select your answer</label>\n' +
                '    <select class="form-control" id="exampleFormControlSelect1">\n' +
                '      <option value="1">A</option>\n' +
                '      <option value="2">B</option>\n' +
                '      <option value="3">C</option>\n' +
                '      <option value="4">D</option>\n' +
                '    </select>\n' +
                '  </div>\n' +
                '</form>';
            break;
        case 3:
            document.getElementById('form').innerHTML =
                '<h4>Question 4</h4>' +
                '<div class="card text-center">\n' +
                '  <div class="card-header">\n' +
                '    Which one of these songs was referenced in The Office during a CPR seminar?\n' +
                '  </div>\n' +
                '  <ul class="list-group list-group-flush">\n' +
                '    <li class="list-group-item">A) Like a Rolling Stone</li>\n' +
                '    <li class="list-group-item">B) Stayin\' Alive</li>\n' +
                '    <li class="list-group-item">C) September</li>\n' +
                '    <li class="list-group-item">D) Livin\' On A Prayer</li>\n' +
                '  </ul>\n' +
                '</div>' +
                '<form>\n' +
                '  <div class="form-group">\n' +
                '    <label for="exampleFormControlSelect1">Select your answer</label>\n' +
                '    <select class="form-control" id="exampleFormControlSelect1">\n' +
                '      <option value="1">A</option>\n' +
                '      <option value="2">B</option>\n' +
                '      <option value="3">C</option>\n' +
                '      <option value="4">D</option>\n' +
                '    </select>\n' +
                '  </div>\n' +
                '</form>';
            break;
        case 4:
            document.getElementById('form').innerHTML =
                '<h4>Question 5</h4>' +
                '<div class="card text-center">\n' +
                '  <div class="card-header">\n' +
                '    Which one of these bands has their best selling album be their Greatest Hits album?\n' +
                '  </div>\n' +
                '  <ul class="list-group list-group-flush">\n' +
                '    <li class="list-group-item">A) The Beatles</li>\n' +
                '    <li class="list-group-item">B) Michael Jackson</li>\n' +
                '    <li class="list-group-item">C) Queen</li>\n' +
                '    <li class="list-group-item">D) Lynyrd Skynyrd</li>\n' +
                '  </ul>\n' +
                '</div>' +
                '<form>\n' +
                '  <div class="form-group">\n' +
                '    <label for="exampleFormControlSelect1">Select your answer</label>\n' +
                '    <select class="form-control" id="exampleFormControlSelect1">\n' +
                '      <option value="1">A</option>\n' +
                '      <option value="2">B</option>\n' +
                '      <option value="3">C</option>\n' +
                '      <option value="4">D</option>\n' +
                '    </select>\n' +
                '  </div>\n' +
                '</form>';
    }
}

function testFun()
{
    var x = document.getElementById("exampleFormControlSelect1").value;
    document.getElementById("solution").innerHTML = x;
}

const Triv = () => {
return(
    <div className="p-3 mb-2 bg-primary text-center">
        <div className="display-4">
            <button className="btn btn-secondary" onClick={lastCreditForm} id="creditForm">
                Click Here for more Credits
            </button>
        </div>
        <div id="demo"></div>
        <div id="form"></div>
        <button className="btn btn-secondary" onClick={testFun} id="testId">
            Submit
        </button>
        <div id="solution"></div>
    </div>
)
}
    export default Triv;