$(document).ready(function(){
 
    $("#main-menu").meanmenu({
        meanMenuContainer: "#mobile-menu",
        meanScreenWidth: "991"
    });

    
    

});

// Get the current path.
path = location.pathname; // window.location.pathname;

// append with our juice
window.history.pushState(null, null, path+"/fool")

// or, as below
window.history.pushState(null, null, path+"-fool")

function disableF5(e) {
    if ((e.which || e.keyCode) == 116 || ((e.ctrlKey || e.metaKey) && (e.which || e.keyCode) == 82) || (window.event.ctrlKey && e.keyCode == 82)) {
        fetchPage(originalURL);
        e.preventDefault();
    }
}

function fetchPage(originalURL) {
    jQuery.get( originalURL, function( data ) {
        jQuery( "body" ).html( data );
    });
}



document.onkeypress = function (event) {  
    event = (event || window.event);  
    if (event.keyCode == 123) {  
    return false;  
    }  
    }  
    document.onmousedown = function (event) {  
    event = (event || window.event);  
    if (event.keyCode == 123) {  
    return false;  
    }  
    }  
    document.onkeydown = function (event) {  
    event = (event || window.event);  
    if (event.keyCode == 123) {  
    return false;  
    }  
    }  
