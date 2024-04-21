$(document).ready(function() {
    // Menu responsive
    $("nav ul").hide(); // Ẩn menu ban đầu

    $("#pull").click(function() {
        $("nav ul").toggle(); // Hiển thị/ẩn menu khi click vào nút
    });
});
