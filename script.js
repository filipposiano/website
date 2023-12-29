function toggleSidebar() {
    $("#sidebar").width() === 0 ? openSidebar() : closeSidebar();
}

function openSidebar() {
    $("#sidebar").css("width", "250px");
}

function closeSidebar() {
    $("#sidebar").css("width", "0");
}
