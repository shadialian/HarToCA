$(document).ready(function () {
    $(document).on("swiperight", "#main", function () {
        $.mobile.changePage("#electric-fish", {transition: "slide", reverse: true}, false);
    });
    $("#start", "#main").on("click", function () {
        $.mobile.changePage("#electric-fish", {transition: "slide", reverse: true}, false);
    });
    $(document).on("pageinit", "[data-role='page'].demo-page", function () {
    var page = "#" + $(this).attr("id"),
            // Get the filename of the next page that we stored in the data-next attribute
            next = $(this).jqmData("next"),
            // Get the filename of the previous page that we stored in the data-prev attribute
            prev = $(this).jqmData("prev");
    // Check if we did set the data-next attribute
    if (prev) {
        // Prefetch the next page
        //$.mobile.loadPage( next + ".html" );
        // Navigate to next page on swipe left
        $(document).on("swipeleft", page, function () {
            $.mobile.changePage("#" + prev, {transition: "slide"}, false);
        });
        // Navigate to next page when the "next" button is clicked
        $(".control .prev", page).on("click", function () {
            $.mobile.changePage("#" + prev, {transition: "slide"}, false);
        });
    }
    // Disable the "next" button if there is no next page
    else {
        $(".control .prev", page).addClass("ui-disabled");
    }
    // The same for the previous page (we set data-dom-cache="true" so there is no need to prefetch)
    if (next) {
        $(document).on("swiperight", page, function () {
            $.mobile.changePage("#" + next, {transition: "slide", reverse: true}, false);
        });
        $(".control .next", page).on("click", function () {
            $.mobile.changePage("#" + next, {transition: "slide", reverse: true}, false);
        });
    }
    else {
        $(".control .next", page).addClass("ui-disabled");
    }
});
});
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

