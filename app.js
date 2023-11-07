// Exercise 2 - Make an AJAX call that returns the list of Superheroes

$(document).ready(() => {
    $('#search').click(() => {
        $.ajax({
            type: 'GET',
            url: 'superheroes.php',
            success: (response) => {
                // display the response in alert() function
                alert(response)
            },
            error: (error) => {
                console.log(error)
            }
        })
    })
})