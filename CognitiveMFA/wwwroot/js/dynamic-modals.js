function doModal(placementId, head, content, jsFunctionToBeCalled, btnText)
{
    var html = '<div id="modalWindow" class="modal fade" tabindex="-1" role="dialog">';
    html += '<div class="modal-dialog" role="document">'
    html += '<div class="modal-content">';
    html += '<div class="modal-header">';
    html += '<a class="close" data-dismiss="modal">×</a>';
    html += '<h4>'+ head +'</h4>'
    html += '</div>';
    html += '<div class="modal-body">';
    html += '<p>';
    html += content;
    html += '</div>';
    html += '<div class="modal-footer">';
    if (btnText!='') {
        html += '<span class="btn btn-success"';
        html += ' onClick="'+ jsFunctionToBeCalled +'">'+ btnText;
        html += '</span>';
    }
    html += '<span class="btn" data-dismiss="modal">';
    html += 'Close';
    html += '</span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';  
    html += '</div>';
    $("#"+ placementId).html(html);
    $("#modalWindow").modal('show');
}


function hideModal()
{
    $('.modal.in').modal('hide');
}