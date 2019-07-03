"use strict";

// Defines variable
const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit( event => {
    event.preventDefault(); // Prevents submition

    let width = $inputWidth.val();
    let height = $inputHeight.val();

    $tableElement.html('');

    makeGrid(height, width);
    addCellClickListener();
});

// Build grid
function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

//  Select color input
function addCellClickListener() {
    $('td').click( event => {
         let color = $colorPicker.val();
         $(event.currentTarget).css("background-color", color)
    });
};
// Adds color when td is clicked
