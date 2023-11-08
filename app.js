// Exercise 3 - Look up any Superhero by typing in the name or alias in a Textfield

$(document).ready(() => {
    $('#search').click((event) => {
        event.preventDefault();

        const query = $('#searchText').val();
        
        $.ajax({
            type: 'GET',
            url: 'superheroes.php',
            success: (response) => {
                $('#result').html(response);
            },
            error: (error) => {
                console.log("[ERROR]: ", error);
            }
        });

        if (query !== '') {
            $.ajax({
                type: 'GET',
                url: 'superheroes.php?query=' + query,
                success: (response2) => {
                    $('#result').html(response2);
                },
                error: (error) => {
                    console.log("[ERROR]: ", error);
                }
            });
        }
    })
})

