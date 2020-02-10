console.log("Running script");



function generatePW(event) {
    event.preventDefault;

    var modal = $("#pwModal");
    var pwBoxID = $("#pwBoxID");
    var pwString = "";

    // Initialize Character Set Associative Array
    var _charSet = [];
    _charSet["special"] = new range(33, 47);
    _charSet["numeric"] = new range(48, 57);
    _charSet["uppercase"] = new range(65, 90);
    _charSet["lowercase"] = new range(97, 122);


    // Validate Password Length //
    var pwField = document.getElementById("pwLength");
    var pwLength = pwField.value;
    var pwHelp = $("#helpText");

    if (pwLength < 8) {
        pwField.className = "btn-outline-danger";
        pwHelp.text("Password must be at least 8 characters");
        pwHelp.css("color", "red");
        return; //Stop function here and return
    }

    var charSetElms = $("input[name='charSet']");
    var selectedSetNames = new Array();

    // Get selected Checkboxes
    $(charSetElms).each(function(item) {

        //Assign checkbox to variable
        var ckBox = charSetElms[item];

        //test if checkbox is checked
        if ($(ckBox).prop("checked")) {

            //if Checked, add to the list of sets selected
            console.log("Checked: " + $(ckBox).prop("value"));
            selectedSetNames.push($(ckBox).prop("value"))
        }
    });

    if (selectedSetNames.length < 3) {

    }



    //Select pwLength number of characters
    for (IDX = 0; IDX < pwLength; IDX++) {

        // Random number representing a random set to create a character from
        rndSetIndex = randomIntFromInterval(0, selectedSetNames.length);

        //Get the set name
        var setName = selectedSetNames[rndSetIndex]; //Random set

        //Get the named cxharacter set containing range
        var sourceSet = _charSet[setName];
        var ascii = randomIntFromInterval(sourceSet.lower, sourceSet.upper);

        pwString = pwString + String.fromCharCode(ascii);
    }

    console.log("Password length: " + pwString.length);

    if (pwString.length >= 90) {
        $(pwBoxID).attr("style", "font-size: 9px");
    } else if (pwString.length >= 80) {
        $(pwBoxID).attr("style", "font-size: 10px");
    } else if (pwString.length >= 60) {
        $(pwBoxID).attr("style", "font-size: 14px");
    } else if (pwString.length >= 50) {
        $(pwBoxID).attr("style", "font-size: 16px");
    }

    pwBoxID.text(pwString);
    $(modal).modal("toggle");

}

function range(lower, upper) {
    //console.log("range received Min: " + lower + " Max: " + upper);
    this.lower = lower;
    this.upper = upper;
}


function randomIntFromInterval(min, max) { // min and max inclusive

    var _min = min
    var _max = max

    var lim = (_max - _min);

    return Math.floor(Math.random() * lim) + min;
}