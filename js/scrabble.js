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
scrabble_board[0] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false, "letter": ""};
scrabble_board[1] = {"letter_double": 1, "word_double": 2, "image": "graphics/double_word_score.png", "occupied": false, "letter": ""};
scrabble_board[2] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false, "letter": ""};
scrabble_board[3] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false, "letter": ""};
scrabble_board[4] = {"letter_double": 2, "word_double": 1, "image": "graphics/double_letter_score.png", "occupied": false, "letter": ""};
scrabble_board[5] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false, "letter": ""};
scrabble_board[6] = {"letter_double": 1, "word_double": 1, "image": "graphics/double_word_score.png", "occupied": false, "letter": ""};
scrabble_board[7] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false, "letter": ""};
scrabble_board[8] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false, "letter": ""};
scrabble_board[9] = {"letter_double": 1, "word_double": 1, "image": "graphics/double_letter_score.png", "occupied": false, "letter": ""};
scrabble_board[10] = {"letter_double": 1, "word_double": 1, "image": "graphics/default_board_square.png", "occupied": false, "letter": ""};

//data structure for tile rack
tile_rack = []

//global total score
var total_score = 0;


get_board_slot_from_letter = function(letter) {
    for(i = 0; i < scrabble_board.length; i++) {
        if (letter == scrabble_board[i].letter) {
            return i;
        }
    }
    return false;
}

get_rack_slot_from_letter = function(letter) {
    for(i = 0; i < tile_rack.length; i++) {
        if (letter == tile_rack[i].tile_id) {
            return i;
        }
    } 
    return false;
}

get_scrabble_tile_index = function(index){
    var char;
    //code converts from i to actual character and uses evaluated char to index array
    //code snippet from https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse_Test.html javascript source
    if ( index < Object.keys(ScrabbleTiles).length - 1) {
        char = String.fromCharCode(65 + index) ;
    } else if ( index < Object.keys(ScrabbleTiles).length) {
        char = "_" ;
    }
    return char;
}

get_word = function(){
    var word = "";
    for(i = 0; i < scrabble_board.length; i++) {
        if(scrabble_board[i].letter == "") {
            word += " ";
        } else {
            word += scrabble_board[i].letter;
        }
    }
    return word
}

calculate_score = function(word){
    var score = 0, word_multiply = 1;
    word = word.trim();
    for(i = 0; i < word.length; i++) {
        if(word[i] == " ") {
            return "-"
        }
        letter = word[i];
        score += ScrabbleTiles[letter]["value"] * scrabble_board[i].letter_double;
        word_multiply *= scrabble_board[i].word_double;
    }
    return score * word_multiply;
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
    var total = $("#total")
    var tiles_remaining = $("#tiles_remaining");

    curr_word = get_word();
    word.text(curr_word);
    score.text(calculate_score(curr_word));
    total.text(total_score);
    tiles_remaining.text(get_tiles_remaining());

    word.css({"font": "bold"});
    score.css({"font": "bold"});
    total.css({"font": "bold"});
    tiles_remaining.css({"font": "bold"});
}

//gets a random index based on range from parameters
get_random_index = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//handles cleanup of old board and tiles
clear_board = function(){
    $(".in_rack").remove();
    $(".on_board").remove();

    for(i = 0; i < scrabble_board.length; i++) {
        scrabble_board[i].occupied = false;
        scrabble_board[i].letter = "";
    }
    tile_rack = [];

}

//handles when submit word button is pressed
//removes used tiles from tiles structure and provides 7 new tiles
submit_word = function(){
    if(calculate_score(get_word()) == "-" || calculate_score(get_word()) == 0) {
        return;
    }
    total_score += Number($("#score").text());
    $("#total").text(total_score);
    clear_board();
    display_tiles();
    display_scoreboard_info();
}

//clears scoreboard and puts all tiles back into tiles structure
//displays 7 random tiles in tile rack
start_over = function(){
    total_score = 0;
    $("#total").text(total_score);
    $("#score").text("0");
    $("#word").text("");

    for(i = 0; i < Object.keys(ScrabbleTiles).length; i++) {
        ScrabbleTiles[get_scrabble_tile_index(i)]["number-remaining"] = ScrabbleTiles[get_scrabble_tile_index(i)]["original-distribution"]
    }

    clear_board();
    display_tiles();
    display_scoreboard_info();
}


//displays 8 random tiles
display_tiles = function(){
    for(i = 0; i < 7; i++) {
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

        tile.draggable({revert: "invalid"});

        slot.append(tile);
        tile_rack[i] = {"tile_id": char, "occupied": true};
        //console.log(get_tiles_remaining())
        //console.log(ScrabbleTiles[char]["number-remaining"]);
        ScrabbleTiles[char]["number-remaining"]--;
        console.log(ScrabbleTiles[char]["number-remaining"]);
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
            index = $(this).attr("id");
            if(ui.draggable.hasClass("on_board")) {
                $(ui.draggable).css("top", "");
                $(ui.draggable).css("left", "");
                previous_slot = ui.helper.parent().attr("id");
                $(this).append(ui.draggable);
                id = ui.helper.attr("id");
                scrabble_board[previous_slot].occupied = false;
                scrabble_board[previous_slot].letter = "";
                scrabble_board[index].occupied = true;
                scrabble_board[index].letter = id;
                display_scoreboard_info(); 
            } else {
                ui.draggable.removeClass("in_rack");
                ui.draggable.addClass("on_board");
                $(ui.draggable).css("top", "");
                $(ui.draggable).css("left", "");
                $(this).append(ui.draggable);
                id = ui.helper.attr("id");
                rack_num = get_rack_slot_from_letter(id);
                tile_rack[rack_num].occupied = false;
                scrabble_board[index].occupied = true;
                scrabble_board[index].letter = id;
                display_scoreboard_info();
            }
         },
         tolerance: "touch"
    });
    
    $(".rack_slot").droppable({
        accept: function(){
            index = $(this).attr("id")[4];
            //offset by 1 to accomodate naming convention
            return (tile_rack[index - 1].occupied == false);
        }, 
        drop: function(event, ui){
            index = $(this).attr("id")[4];
            if(ui.draggable.hasClass("in_rack")) {
                $(ui.draggable).css("top", "");
                $(ui.draggable).css("left", "");
                previous_slot = ui.helper.parent().attr("id") [4];
                $(this).append(ui.draggable);
                id = ui.helper.attr("id");
                tile_rack[previous_slot].occupied = false;
                tile_rack[previous_slot].letter = "";
                tile_rack[index].occupied = true;
                tile_rack[index].letter = id;
                display_scoreboard_info(); 
            } else {
                ui.draggable.removeClass("on_board");
                ui.draggable.addClass("in_rack");
                $(ui.draggable).css("top", "");
                $(ui.draggable).css("left", "");
                $(this).append(ui.draggable);
                id = ui.helper.attr("id");
                board_num = get_board_slot_from_letter(id)
                tile_rack[index].occupied = true;
                scrabble_board[board_num].occupied = false;
                scrabble_board[board_num].letter = "";
                display_scoreboard_info();
            }
        },
        tolerance: "touch"
    });

    
});
