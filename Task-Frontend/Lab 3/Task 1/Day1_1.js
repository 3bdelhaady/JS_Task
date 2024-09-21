document.getElementById("open").addEventListener("click", function() {
   
    var left = screen.width - 500
    var top = screen.height - 500
    var width = 600
    var height = 400
     window.open(
        "https://www.linkedin.com/posts/a-rhman-yahya_teamwork-collaboration-webdevelopment-activity-7238498919209463808-6TtN?utm_source=share&utm_medium=member_android","_blank",
        "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top
    );
});