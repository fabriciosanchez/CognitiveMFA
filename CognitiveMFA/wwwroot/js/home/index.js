$(document).ready(function(){

    //Call new user modal
    $("#callNewUserModal").click(function(){
        var modalContent = '';
        
        doModal("containerUserModal", "Adding a new user", "Test", "SomeAction()", "Some action!");
    });

});