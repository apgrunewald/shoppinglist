$(document).ready(function () {
    //Adding new items to each category BEGIN//
     $('#produceb').click(function () {
        $('#produce').append('<p class="todo"><button class="delete">X</button>' + $('input#add').val() + '</p>');
        $('#add').val("");
    });
    $('#proteinb').click(function () {
        $('#protein').append('<p class="todo"><button class="delete">X</button>' + $('input#add').val() + '</p>');
        $('#add').val("");
    });
    $('#otherb').click(function () {
        $('#other').append('<p class="todo"><button class="delete">X</button>' + $('input#add').val() + '</p>');
        $('#add').val("");
    });
    //Delete items//
    $("#produce").on("click", ".delete", function () {
        $(this).parent(".todo").remove();
    })
    $("#protein").on("click", ".delete", function () {
        $(this).parent(".todo").remove();
    })
    $("#other").on("click", ".delete", function () {
        $(this).parent(".todo").remove();
    })

    //checked items//
    $("#produce").on('click', 'p', function () {
        $(this).closest('p').toggleClass('checked');
    });
    $("#protein").on('click', 'p', function () {
        $(this).closest('p').toggleClass('checked');
    });
    $("#other").on('click', 'p', function () {
        $(this).closest('p').toggleClass('checked');
    });
    
    });