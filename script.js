/**
 * JQueryLab - Global Script
 * Handles basic UI interactions and shared demonstration logic.
 */

$(document).ready(function() {
    console.log("JQueryLab Ready!");

    // Universal Log function (if not defined in page)
    window.logToPool = function(msg) {
        const logContainer = $("#log-list");
        if (logContainer.length) {
            const entry = $('<div class="log-entry">[' + new Date().toLocaleTimeString() + '] <span>' + msg + '</span></div>');
            logContainer.prepend(entry);
        }
    };

    // --- Selectors Handler ---
    // Specifically for selectors.html where buttons have data-selector
    $("button[data-selector]").on("click", function() {
        const selector = $(this).data("selector");
        const parentId = $(this).closest(".card").find(".demo-area").attr("id");
        
        // Clear previous selections within this demo area
        $("#" + parentId + " *").removeClass("selected");
        
        // Apply selection
        const selected = $("#" + parentId).find(selector);
        selected.addClass("selected");
        
        window.logToPool("Selected: " + selector + " (" + selected.length + " items)");
    });

    // --- Active Nav Link ---
    const path = window.location.pathname.split("/").pop();
    if (path) {
        $("nav a").removeClass("active");
        $('nav a[href="' + path + '"]').addClass("active");
    } else {
        $('nav a[href="index.html"]').addClass("active");
    }

    // --- Custom Scrollbar for Logs ---
    $("#log-list").css({
        "scrollbar-width": "thin",
        "scrollbar-color": "var(--primary) transparent"
    });
});
