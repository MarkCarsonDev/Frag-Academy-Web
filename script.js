function writeCookie(key, value, hours) {
    var date = new Date();

    date.setTime(+ date + (hours * 3600000));

    window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";

    return value;
};

window.addEventListener('scroll', () => {
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for (let i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
}, false)

function checkbox() {
    var checkbox = document.getElementById("parallaxCheckbox");
    var parallax = document.getElementsByClassName("parallax");

    if (checkbox.checked == false) {
        document.cookie = "parallax=disabled";
        var i;
        for (i = 0; i < (parallax.length - 1); i++) {
            parallax[i + 1].style.width = "auto";
        }
    } else {
        document.cookie = "parallax=enabled";
        var i;
        for (i = 0; i < (parallax.length - 1); i++) {
            parallax[i + 1].style.width = "2560px";
        }
    }
}

function cookieCheck() {
    var x = document.cookie;
    var parallax = document.getElementsByClassName("parallax");
    if (x.indexOf("parallax=disabled") != -1) {
        document.getElementById("parallaxCheckbox").checked = false;
        var i;
        for (i = 0; i < (parallax.length - 1); i++) {
            parallax[i + 1].style.width = "auto";
        }
    } else {
        document.getElementById("parallaxCheckbox").checked = true;
        var i;
        for (i = 0; i < (parallax.length - 1); i++) {
            parallax[i + 1].style.width = "2560px";
        }
    }
}

function tf2cwindow() {
    var iframeoverlay = document.getElementsByClassName("iframeoverlay");
    iframeoverlay[0].style.cursor = "progress";
    var tf2cpage = window.open("http://tf2center.com", "TF2C Loading...", "height=100, width=100");
    setTimeout(function () {tf2cpage.close(); writeCookie("tf2cloaded", "true", 4); location.reload()}, 5750 );
};

function tf2cCookieChecker() {
    if (document.cookie.indexOf("tf2cloaded=true") == -1) {
        var iframeoverlay = document.getElementsByClassName("iframeoverlay");
        if (iframeoverlay) {
            iframeoverlay[0].style.zIndex = "2";
        }
    }
}

var statusScout = document.getElementById("hiddenScout");
var statusSoldier = document.getElementById("hiddenSoldier");
var statusPyro = document.getElementById("hiddenPyro");
var statusDemoman = document.getElementById("hiddenDemoman");
var statusHeavy = document.getElementById("hiddenHeavy");
var statusEngineer = document.getElementById("hiddenEngineer");
var statusMedic = document.getElementById("hiddenMedic");
var statusSniper = document.getElementById("hiddenSniper");
var statusSpy = document.getElementById("hiddenSpy");
var buttonScout = document.getElementById("buttonScout");
var buttonSoldier = document.getElementById("buttonSoldier");
var buttonPyro = document.getElementById("buttonPyro");
var buttonDemoman = document.getElementById("buttonDemoman");
var buttonHeavy = document.getElementById("buttonHeavy");
var buttonEngineer = document.getElementById("buttonEngineer");
var buttonMedic = document.getElementById("buttonMedic");
var buttonSniper = document.getElementById("buttonSniper");
var buttonSpy = document.getElementById("buttonSpy");

function disableButtonsClasses() {
    var statusScout = document.getElementById("hiddenScout");
    var statusSoldier = document.getElementById("hiddenSoldier");
    var statusPyro = document.getElementById("hiddenPyro");
    var statusDemoman = document.getElementById("hiddenDemoman");
    var statusHeavy = document.getElementById("hiddenHeavy");
    var statusEngineer = document.getElementById("hiddenEngineer");
    var statusMedic = document.getElementById("hiddenMedic");
    var statusSniper = document.getElementById("hiddenSniper");
    var statusSpy = document.getElementById("hiddenSpy");
    var buttonScout = document.getElementById("buttonScout");
    var buttonSoldier = document.getElementById("buttonSoldier");
    var buttonPyro = document.getElementById("buttonPyro");
    var buttonDemoman = document.getElementById("buttonDemoman");
    var buttonHeavy = document.getElementById("buttonHeavy");
    var buttonEngineer = document.getElementById("buttonEngineer");
    var buttonMedic = document.getElementById("buttonMedic");
    var buttonSniper = document.getElementById("buttonSniper");
    var buttonSpy = document.getElementById("buttonSpy");
    statusScout.style.display = "none";
    statusSoldier.style.display = "none";
    statusPyro.style.display = "none";
    statusDemoman.style.display = "none";
    statusHeavy.style.display = "none";
    statusEngineer.style.display = "none";
    statusMedic.style.display = "none";
    statusSniper.style.display = "none";
    statusSpy.style.display = "none";
    buttonScout.style.border = "0";
    buttonSoldier.style.border = "0";
    buttonPyro.style.border = "0";
    buttonDemoman.style.border = "0";
    buttonHeavy.style.border = "0";
    buttonEngineer.style.border = "0";
    buttonMedic.style.border = "0";
    buttonSniper.style.border = "0";
    buttonSpy.style.border = "0";
}

function hideTextScout() {
    var statusScout = document.getElementById("hiddenScout");
    var buttonScout = document.getElementById("buttonScout");
    if (statusScout.style.display === "none") {
        disableButtonsClasses();
        statusScout.style.display = "block";
        buttonScout.style.border = "#EEEEEE 3px solid"
    } else {
        statusScout.style.display = "none";
        buttonScout.style.border = "0"
    }
}

function hideTextSoldier() {
    var statusSoldier = document.getElementById("hiddenSoldier");
    var buttonSoldier = document.getElementById("buttonSoldier");
    if (statusSoldier.style.display === "none") {
        disableButtonsClasses();
        statusSoldier.style.display = "block";
        buttonSoldier.style.border = "#EEEEEE 3px solid"
    } else {
        statusSoldier.style.display = "none";
        buttonSoldier.style.border = "0"
    }
}

function hideTextPyro() {
    var statusPyro = document.getElementById("hiddenPyro");
    var buttonPyro = document.getElementById("buttonPyro");
    if (statusPyro.style.display === "none") {
        disableButtonsClasses();
        statusPyro.style.display = "block";
        buttonPyro.style.border = "#EEEEEE 3px solid"
    } else {
        statusPyro.style.display = "none";
        buttonPyro.style.border = "0"
    }
}

function hideTextDemoman() {
    var statusDemoman = document.getElementById("hiddenDemoman");
    var buttonDemoman = document.getElementById("buttonDemoman");
    if (statusDemoman.style.display === "none") {
        disableButtonsClasses();
        statusDemoman.style.display = "block";
        buttonDemoman.style.border = "#EEEEEE 3px solid"
    } else {
        statusDemoman.style.display = "none";
        buttonDemoman.style.border = "0"
    }
}

function hideTextHeavy() {
    var statusHeavy = document.getElementById("hiddenHeavy");
    var buttonHeavy = document.getElementById("buttonHeavy");
    if (statusHeavy.style.display === "none") {
        disableButtonsClasses();
        statusHeavy.style.display = "block";
        buttonHeavy.style.border = "#EEEEEE 3px solid"
    } else {
        statusHeavy.style.display = "none";
        buttonHeavy.style.border = "0"
    }
}

function hideTextEngineer() {
    var statusEngineer = document.getElementById("hiddenEngineer");
    var buttonEngineer = document.getElementById("buttonEngineer");
    if (statusEngineer.style.display === "none") {
        disableButtonsClasses();
        statusEngineer.style.display = "block";
        buttonEngineer.style.border = "#EEEEEE 3px solid"
    } else {
        statusEngineer.style.display = "none";
        buttonEngineer.style.border = "0"
    }
}

function hideTextMedic() {
    var statusMedic = document.getElementById("hiddenMedic");
    var buttonMedic = document.getElementById("buttonMedic");
    if (statusMedic.style.display === "none") {
        disableButtonsClasses();
        statusMedic.style.display = "block";
        buttonMedic.style.border = "#EEEEEE 3px solid"
    } else {
        statusMedic.style.display = "none";
        buttonMedic.style.border = "0"
    }
}

function hideTextSniper() {
    var statusSniper = document.getElementById("hiddenSniper");
    var buttonSniper = document.getElementById("buttonSniper");
    if (statusSniper.style.display === "none") {
        disableButtonsClasses();
        statusSniper.style.display = "block";
        buttonSniper.style.border = "#EEEEEE 3px solid"
    } else {
        statusSniper.style.display = "none";
        buttonSniper.style.border = "0"
    }
}

function hideTextSpy() {
    var statusSpy = document.getElementById("hiddenSpy");
    var buttonSpy = document.getElementById("buttonSpy");
    if (statusSpy.style.display === "none") {
        disableButtonsClasses();
        statusSpy.style.display = "block";
        buttonSpy.style.border = "#EEEEEE 3px solid"
    } else {
        statusSpy.style.display = "none";
        buttonSpy.style.border = "0"
    }
}






var statusUltiduo = document.getElementById("hiddenUltiduo");
var statusFours = document.getElementById("hiddenFours");
var statusSixes = document.getElementById("hiddenSixes");
var statusProlander = document.getElementById("hiddenProlander");
var statusHighlander = document.getElementById("hiddenHighlander");
var buttonUltiduo = document.getElementById("buttonUltiduo");
var buttonFours = document.getElementById("buttonFours");
var buttonSixes = document.getElementById("buttonSixes");
var buttonProlander = document.getElementById("buttonProlander");
var buttonHighlander = document.getElementById("buttonHighlander");

function disableButtonsGamemodes() {
    var statusUltiduo = document.getElementById("hiddenUltiduo");
    var statusFours = document.getElementById("hiddenFours");
    var statusSixes = document.getElementById("hiddenSixes");
    var statusProlander = document.getElementById("hiddenProlander");
    var statusHighlander = document.getElementById("hiddenHighlander");
    var buttonUltiduo = document.getElementById("buttonUltiduo");
    var buttonFours = document.getElementById("buttonFours");
    var buttonSixes = document.getElementById("buttonSixes");
    var buttonProlander = document.getElementById("buttonProlander");
    var buttonHighlander = document.getElementById("buttonHighlander");
    statusUltiduo.style.display = "none";
    statusFours.style.display = "none";
    statusSixes.style.display = "none";
    statusProlander.style.display = "none";
    statusHighlander.style.display = "none";
    buttonUltiduo.style.border = "0";
    buttonFours.style.border = "0";
    buttonSixes.style.border = "0";
    buttonProlander.style.border = "0";
    buttonHighlander.style.border = "0";
}

function hideTextUltiduo() {
    var statusUltiduo = document.getElementById("hiddenUltiduo");
    var buttonUltiduo = document.getElementById("buttonUltiduo");
    if (statusUltiduo.style.display === "none") {
        disableButtonsGamemodes();
        statusUltiduo.style.display = "block";
        buttonUltiduo.style.border = "#EEEEEE 3px solid"
    } else {
        statusUltiduo.style.display = "none";
        buttonUltiduo.style.border = "0"
    }
}

function hideTextFours() {
    var statusFours = document.getElementById("hiddenFours");
    var buttonFours = document.getElementById("buttonFours");
    if (statusFours.style.display === "none") {
        disableButtonsGamemodes();
        statusFours.style.display = "block";
        buttonFours.style.border = "#EEEEEE 3px solid"
    } else {
        statusFours.style.display = "none";
        buttonFours.style.border = "0"
    }
}

function hideTextSixes() {
    var statusSixes = document.getElementById("hiddenSixes");
    var buttonSixes = document.getElementById("buttonSixes");
    if (statusSixes.style.display === "none") {
        disableButtonsGamemodes();
        statusSixes.style.display = "block";
        buttonSixes.style.border = "#EEEEEE 3px solid"
    } else {
        statusSixes.style.display = "none";
        buttonSixes.style.border = "0"
    }
}

function hideTextProlander() {
    var statusProlander = document.getElementById("hiddenProlander");
    var buttonProlander = document.getElementById("buttonProlander");
    if (statusProlander.style.display === "none") {
        disableButtonsGamemodes();
        statusProlander.style.display = "block";
        buttonProlander.style.border = "#EEEEEE 3px solid"
    } else {
        statusProlander.style.display = "none";
        buttonProlander.style.border = "0"
    }
}

function hideTextHighlander() {
    var statusHighlander = document.getElementById("hiddenHighlander");
    var buttonHighlander = document.getElementById("buttonHighlander");
    if (statusHighlander.style.display === "none") {
        disableButtonsGamemodes();
        statusHighlander.style.display = "block";
        buttonHighlander.style.border = "#EEEEEE 3px solid"
    } else {
        statusHighlander.style.display = "none";
        buttonHighlander.style.border = "0"
    }
}