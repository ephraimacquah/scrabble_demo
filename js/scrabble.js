/*  File:  /~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
 *  Jesse M. Heines, UMass Lowell Computer Science, heines@cs.uml.edu
 *  Copyright (c) 2015 by Jesse M. Heines.  All rights reserved.  May be freely 
 *    copied or excerpted for educational purposes with credit to the author.
 *  updated by JMH on November 21, 2015 at 10:27 AM
 *  updated by JMH on November 25, 2015 at 10:58 AM to add the blank tile
 *  updated by JMH on November 27, 2015 at 10:22 AM to add original-distribution
 */
 
var ScrabbleTiles = [];
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_A.jpg"  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_B.jpg"  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_C.jpg"  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_D.jpg"  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_E.jpg" } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_F.jpg"  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_G.jpg"  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_H.jpg"  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_I.jpg"  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_J.jpg"  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_K.jpg"  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_L.jpg"  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_M.jpg"  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_N.jpg"  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_O.jpg"  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_P.jpg"  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_Q.jpg"  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_R.jpg"  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_S.jpg"  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_T.jpg"  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_U.jpg" } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_V.jpg"  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_W.jpg"  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_X.jpg"  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_Y.jpg"  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_Z.jpg"  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"  } ;

//data structure for scrabble board heavily based off of examply by Yong Cho 2015
scrabble_board = [];
scrabble_board[0] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false};
scrabble_board[1] = {"letter_double": 1, "word_double": 2, "image": "graphics/double_word_score.png", "occupied": false};
scrabble_board[2] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false};
scrabble_board[3] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false};
scrabble_board[4] = {"letter_double": 2, "word_double": 1, "image": "graphics/double_letter_score.png", "occupied": false};
scrabble_board[5] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false};
scrabble_board[6] = {"letter_double": 1, "word_double": 1, "image": "graphics/double_word_score.png", "occupied": false};
scrabble_board[7] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false};
scrabble_board[8] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false};
scrabble_board[9] = {"letter_double": 1, "word_double": 1, "image": "graphics/double_letter_score.png", "occupied": false};
scrabble_board[10] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false};

//data structure for tile rack
tile_rack = []

get_scrabble_tile_index = function(index){
    var char;
    //code converts from i to actual character and uses evaluated char to index array
    //code snippet from https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse_Test.html javascript source
    if ( index < Object.keys( ScrabbleTiles ).length - 1 ) {
        char = String.fromCharCode(65 + i) ;
    } else if ( index < Object.keys( ScrabbleTiles ).length ) {
        char = "_" ;
    }
    return char;
}

get_word = function(){

}

calculate_score = function(tile){

}

get_tiles_remaining = function(){
    tr = 0;

    for(i = 0; i < Object.keys(ScrabbleTiles).length; i++) {
        char = get_scrabble_tile_index(i);
        tr += ScrabbleTiles[char]["number-remaining"];
    }
    return tr;
}

//displays scoreboard info of word being built, current score, and number of tiles remaining
display_scoreboard_info = function() {
    var word = $("#word");
    var score = $("#score");
    var tiles_remaining = $("#tiles_remaining");

    word.text(get_word());
    score.text(calculate_score());
    tiles_remaining.text(get_tiles_remaining());

    word.css({"font": "bold"});
    score.css({"font": "bold"});
    tiles_remaining.css({"font": "bold"});
}

//gets a random index based on range from parameters
get_random_index = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//handles when submit word button is pressed
//removes used tiles from tiles structure and provides 7 new tiles
submit_word = function(){

}

//clears scoreboard and puts all tiles back into tiles structure
//displays 7 random tiles in tile rack
start_over = function(){

}


//displays 8 random tiles
display_tiles = function(){
    for(i = 0; i < 8; i++) {
        do {
        index = get_random_index(0, Object.keys(ScrabbleTiles).length);
        char = get_scrabble_tile_index(index);
        } while(ScrabbleTiles[char]["number-remaining"] == 0);
        slot = $("#slot" + (i + 1));
        slot.addClass("rack_slot");
        slot.css({"width": "90px", "height": "120px", "vertical-align": "middle"})
        tile = $("<img>", {
            src: ScrabbleTiles[char]["image"],
            alt: char + " tile",
            id: char,
            class: "in_rack"
        });

        tile.draggable({revert: "invalid",
                        helper: "clone"});

        slot.append(tile);
        tile_rack[i] = {"tile_id": char, "occupied": true};
        ScrabbleTiles[char]["number-remaining"]--;
    }
}

draw_board = function() {
    $("#board").css({
        "display": "flex",
        "flex-direction": "row"
    })
    for(i = 0; i < scrabble_board.length; i++) {
        var board_slot = $("<div>");
        board_slot.addClass("board_slot");
        board_slot.attr("id", i);
        board_slot.css({
            "height": "72px",
            "width": "72px",
            "background-image": "url(" + scrabble_board[i].image + ")",
        });
        $("#board").append(board_slot);
    }
}



$().ready(function() {
    //draws board
    $(".in_rack").css({"margin": "auto, 5px 0px 5px",
                        "width": "64px",
                        "height": "64px"});
    $(".on_board").css({"margin-top": "20px"})
    draw_board();    
    display_tiles();
    display_scoreboard_info();

    $(".board_slot").droppable({
        accept: function(){
            index = $(this).attr("id");
            return (scrabble_board[index].occupied == false);
        },
        drop: function(event, ui){
            ui.draggable.removeClass("in_rack");
            ui.draggable.addClass("on_board");
            $(ui.draggable).css("top", "-1px");
            $(ui.draggable).css("left", "");
            $(this).append(ui.draggable);
         },
         tolerance: "touch"
    });
    
    $(".rack_slot").droppable({
        accept: function(){
            index = $(this).attr("id")[4];
            return (scrabble_board[index].occupied == false);
        }, 
        drop: function(event, ui){
            ui.draggable.removeClass("on_board");
            ui.draggable.addClass("in_rack");
            $(ui.draggable).css("top", "-1px");
            $(ui.draggable).css("left", "");
            $(this).append(ui.draggable);
            $(this).addClass("occupied");
        },
        tolerance: "touch"
    });

    
});
