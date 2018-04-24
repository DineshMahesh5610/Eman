alertModal = function () { };
alertModal.success = function (message) {

    //fnRemoveExistToast();
    //var $toastContent = $('<span class="alertmsg">' + message + '</span>');
    //Materialize.toast($toastContent, 5000);
    //$(".toast").addClass("light-green");


    setTimeout(function () {
        $('#alert_placeholder').html('<div class="alert alert-success alert-dismissible fade in d-i-b z-depth-3" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + message + '</div>');
        setTimeout(function () { $(".alert").alert('close'); }, 4000);
    }, 500);

};
alertModal.info = function (message) {

    setTimeout(function () {
        $('#alert_placeholder').html('<div class="alert alert-info alert-dismissible fade in d-i-b z-depth-3" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + message + '</div>');
        setTimeout(function () { $(".alert").alert('close'); }, 4000);
    }, 500);
};
alertModal.error = function (message) {
    //fnRemoveExistToast();
    //var $toastContent = $('<span class="alertmsg">' + message + '</span>');
    //Materialize.toast($toastContent, 5000);
    //$(".toast").addClass("red darken-3");

    setTimeout(function () {
        $('#alert_placeholder').html('<div class="alert alert-danger alert-dismissible fade in d-i-b z-depth-3" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + message + '</div>');
        setTimeout(function () { $(".alert").alert('close'); }, 4000);
    }, 500);

};
alertModal.warning = function (message) {
    //fnRemoveExistToast();
    //var $toastContent = $('<span class="alertmsg">' + message + '</span>');
    //Materialize.toast($toastContent, 5000);
    //$(".toast").addClass("amber accent-3");

    setTimeout(function () {
        $('#alert_placeholder').html('<div class="alert alert-warning alert-dismissible fade in d-i-b z-depth-3" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + message + '</div>');
        setTimeout(function () { $(".alert").alert('close'); }, 4000);
    }, 500);

};