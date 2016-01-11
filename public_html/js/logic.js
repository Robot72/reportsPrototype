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
    return false;
}
//Event handlers:
$(document).ready(function () {
    $(document).on('click', '.toggle-form', Logic.toggleForm);
    $(document).on('click', '.get-report', Logic.getReport);
    $('#hide-form').prop('checked', 'checked');
    $('#dataTables-example').dataTable();
})