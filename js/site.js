// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function Redirect(url) {
    window.location.href = url;
}
function ShowDiscardConfirmation(url) {
    var r = confirm("Discard changes?");
    if (r == true) {
        window.location.href = url;
    }
}

function GetKeyPressed(e) {
    var keynum;
    if (window.event) // IE
    {
        keynum = e.keyCode;
    }
    else if (e.which) // Netscape/Firefox/Opera
    {
        keynum = e.which;
    }

    return keynum;
}

function OnlyAllowNumbers(e) {
    var result = false;
    var keynum = GetKeyPressed(e);
    //check ok keys...
    if (IsSafeKey(keynum)) {
        result = true;
    }
    else if ((keynum >= 48 && keynum <= 57) || (keynum >= 96 && keynum <= 105)) //numeric keys
    {
        result = true;
    }
    return result;
}

function OnlyAllowNumbersAndComma(e) {
    var result = false;
    var keynum = GetKeyPressed(e);
    //check ok keys...
    if (IsSafeKey(keynum)) {
        result = true;
    }
    else if ((keynum >= 48 && keynum <= 57) || (keynum >= 96 && keynum <= 105)) {
        result = true;
    }
    else if ((keynum === 188)) {
        result = true;
    }

    return result;
}

function OnlyAllowDecimalValues(e) {
    var result = false;
    var keynum = GetKeyPressed(e);
    //check ok keys...
    if (IsSafeKey(keynum)) {
        result = true;
    }
    else if ((keynum >= 48 && keynum <= 57) || (keynum >= 96 && keynum <= 105)) {
        result = true;
    }
    else if ((keynum === 109 || keynum === 189 || keynum === 110 || keynum === 190 || keynum === 188)) {
        result = true;
    }

    return result;
}

function OnlyAllowDateCharacters(e) {
    var result = false;
    var keynum = GetKeyPressed(e);
    //check ok keys...
    if (IsSafeKey(keynum)) {
        result = true;
    }
    else if ((keynum >= 48 && keynum <= 57) || (keynum >= 96 && keynum <= 105)) {
        result = true;
    }
    else if (keynum === 111 | keynum === 191) {
        result = true;
    }
    return result;
}


//http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

function IsSafeKey(keynum) {
    var result = false;
    if ((keynum === 8)        //backspace
        || (keynum === 9)    //tab
        || (keynum === 16)    //shift
        || (keynum === 17)    //ctrl
        || (keynum === 18)    //alt
        || (keynum === 20)    //caplocks
        || (keynum === 27)    //esc
        || (keynum === 33)    //pageup
        || (keynum === 34)    //pagedown
        || (keynum === 35)    //end
        || (keynum === 36)    //home
        || (keynum === 37)    //left-arrow
        || (keynum === 38)    //up-arrow
        || (keynum === 39)    //right-arrow
        || (keynum === 40)    //down-arrow
        || (keynum === 46)    //delete

    ) {
        result = true;
    }

    return result;
}
