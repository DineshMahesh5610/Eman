$(document).ready(function () {
    fnvalidate();

});
function fnvalidate()
{

}
function fnCheckLogin()
{
    var username = $("#txtusername").val();
    var password = $("#txtpassword").val();

    if (username == "") {
        alertModal.warning("Please Enter Username");
        return false;
    }
    if (password == "") {
        alertModal.warning("Please Enter Password");
        return false;
    }

    var data = {
        username: username,
        password: password,
    };

    alertModal.info("Authenticating Login...");
    $.ajax({
        type: "POST",
        url: "../Login/CheckLogin",
        data: data,
        dataType: 'json',
        success: function (html) {
            if (html != "") {
                var data = eval(html).result;
                if (data == "1") {
                    alertModal.success("Successfully Logged In");

                    //   alert(data.userid);

                    window.localStorage.setItem('userid', data.userid);
                    window.localStorage.setItem('fullname', data.fullname);
                    window.localStorage.setItem('role', data.roleid);
                    window.localStorage.setItem('empname', data.empname);
                    window.localStorage.setItem('design', data.design);
                    window.localStorage.setItem('photo', data.photo);

                    //var id = window.localStorage.getItem('fullname');
                    //alert(id);
                    //if ( $( "#txttargerurl" ).val().trim() == "" )
                    window.location.href = "../Home/Dashboard?navm=1&navs=8";
                    //else
                    //  window.location.href =  $( "#txttargerurl" ).val().trim();
                } else {
                    alertModal.error("Invalid Username and Password");
                }
            }
        }
    });
}
