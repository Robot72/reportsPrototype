Logic = {};
Logic.isShowPanelBody = true;
Logic.hideForm = function () {
    $('.panel-body').hide(1000);
    $('.toggle-link').text('показать форму');
    Logic.isShowPanelBody = false;
}
Logic.toggleForm = function () {
    if(Logic.isShowPanelBody == true) {
        Logic.hideForm();
    } else {
        $('.panel-body').show(1000);
        $('.toggle-link').text('скрыть форму');
        Logic.isShowPanelBody = true;
    }    
}
Logic.getReport = function () {
    if($('#hide-form').prop('checked')) {
        Logic.hideForm();
    }
    $('.dataTable_wrapper').show(1000);
    $('#report-options').modal('hide');
    return false;
}

//Report style 2
Logic.modalOptions = function () {
    $('#report-options').modal('show');
    return false;
}

//Event handlers:
$(document).ready(function () {
    //Style 1
    $(document).on('click', '.toggle-form', Logic.toggleForm);
    $(document).on('click', '.get-report', Logic.getReport);
    $('#hide-form').prop('checked', 'checked');
    $('#dataTables-example').dataTable();
    
    //Style 2
    $(document).on('click', '.report-options', Logic.modalOptions);
    $(document).on('click', '.show-additional', Logic.modalOptions);
    //$(document).on('click', '.report-')
});