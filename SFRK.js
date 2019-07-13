// Firebase Informations
var fireLoaded = {};

var SFRKUD = {};
let u = document.getElementsByClassName("SFRK")[0].src;
if(u.search("\\?")!=-1) u = u.substr(u.search("\\?"));
var _f = 1;
while(_f || u.search("\\&")!=-1) {
    _f = 0;
    var k1=1, k2, v1, v2, tmp=0;
    while(u.charAt(tmp)!="=") {
        if(tmp < u.length) tmp++;
        else break;
    }
    k2 = tmp;
    v1 = tmp + 1;
    while(u.charAt(tmp)!="&") {
        if(tmp < u.length) tmp++;
        else break;
    }
    v2 = tmp;
    if(tmp > u.length) break;
    SFRKUD[decodeURIComponent(u.substring(k1, k2))] = decodeURIComponent(u.substring(v1, v2));
    u = u.substr(tmp);
}

var fireVer = SFRKUD["ver"] ? SFRKUD["ver"] : "6.3.0";
var fireDefer = SFRKUD["defer"] ? SFRKUD["defer"] : true;
var fireRoot = SFRKUD["root"] ? SFRKUD["root"] : "https://www.gstatic.com/firebasejs/";

// load firebase scripts
if(true) {
    let script = document.createElement("script");
    script.onload = () => {
        fireLoaded.core = true;
        console.log("Firebase Core Loaded.");
        firebaseLoaded();
    };
    script.src = fireRoot + fireVer + "/firebase-app.js";
    if(fireDefer)
        script.defer = "defer";
    document.head.appendChild(script);
}

if(SFRKUD["auth"]) {
    let script = document.createElement("script");
    script.onload = () => {
        fireLoaded.auth = true;
        console.log("Firebase Auth Loaded.");
        firebaseLoaded();
    };
    if(fireDefer)
        script.defer = "defer";
    script.src = fireRoot + fireVer + "/firebase-auth.js";
    document.head.appendChild(script);
}

if(SFRKUD["firestore"]) {
    let script = document.createElement("script");
    script.onload = () => {
        fireLoaded.firestore = true;
        console.log("Firebase Firestore Loaded.");
        firebaseLoaded();
    };
    if(fireDefer)
        script.defer = "defer";
    script.src = fireRoot + fireVer + "/firebase-firestore.js";
    document.head.appendChild(script);
}

if(SFRKUD["storage"]) {
    let script = document.createElement("script");
    script.onload = () => {
        fireLoaded.storage = true;
        console.log("Firebase Storage Loaded.");
        firebaseLoaded();
    };
    if(fireDefer)
        script.defer = "defer";
    script.src = fireRoot + fireVer + "/firebase-storage.js";
    document.head.appendChild(script);
}

function firebaseLoaded() {
    if(fireLoaded.core == true && fireLoaded.auth == SFRKUD["auth"] && fireLoaded.firestore == SFRKUD["firestore"] && fireLoaded.storage == SFRKUD["storage"]) {
        var firebaseConfig = {
            apiKey: SFRKUD["key"],
            authDomain: SFRKUD["domain"],
            databaseURL: SFRKUD["db"],
            projectId: SFRKUD["pid"],
            storageBucket: SFRKUD["bucket"],
            messagingSenderId: SFRKUD["sender"],
            appId: SFRKUD["app"]
        };
        firebase.initializeApp(firebaseConfig);
        console.log("Firebase Initialized.");
    }
}
