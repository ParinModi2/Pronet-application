/**
 * Created by varuna on 4/2/15.
 */
$(document).ready(

function() {

    $("#foll").click(function () {
        var f;
        if($("#foll").text() == "Follow")
        {
            f = "Follow";
            $("#foll").text("Unfollow");

            var fc = $("#followerCount").val();
            $("#followerCount").val(fc++);
            console.log(fc);
            $("#displayfc").text(fc+" followers");
        }
        else
        {
            f = "UnFollow";
            $("#foll").text("Follow");
            var fc = $("#followerCount").val();
            $("#followerCount").val(fc--);
            console.log(fc);
            $("#displayfc").text(fc+" followers");
        }

        var val1 = $("#sampleID").val() + "|" + f;
        $("#thisID").val(val1);

    });
});
