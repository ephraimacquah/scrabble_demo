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

//if the letter is a tile on the board, it returns board slot index
get_board_slot_from_letter = function(letter) {
    for(var i = 0; i < scrabble_board.length; i++) {
        if (letter == scrabble_board[i].letter) {
            return i;
        }
    }
    return false;
}

//if the letter is a tile on the rack, it returns rack slot index
get_rack_slot_from_letter = function(letter) {
    for(var i = 0; i < tile_rack.length; i++) {
        if (letter == tile_rack[i].tile_id) {
            return i;
        }
    } 
    return false;
}

//gets letter used to index ScrabbleTiles data structure
get_scrabble_tile_index = function(index){
    var char;
    //code converts from i to actual character and uses evaluated char to index array
    //code snippet from https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse_Test.html javascript source
    if (index < Object.keys(ScrabbleTiles).length - 1) {
        char = String.fromCharCode(65 + index) ;
    } else if ( index < Object.keys(ScrabbleTiles).length) {
        char = "_" ;
    }
    return char;
}

//returns word that is on the game noard
get_word = function(){
    var word = "";
    for(var i = 0; i < scrabble_board.length; i++) {
        if(scrabble_board[i].letter == "") {
            word += " ";
        } else {
            word += scrabble_board[i].letter;
        }
    }
    return word
}

//returns current score for tiles on game board
calculate_score = function(word){
    var score = 0, word_multiply = 1, letter;
    word = word.trim();
    for(var i = 0; i < word.length; i++) {
        if(word[i] == " ") {
            return "-"
        }
        letter = word[i];
        score += ScrabbleTiles[letter]["value"] * scrabble_board[i].letter_double;
        word_multiply *= scrabble_board[i].word_double;
    }
    return score * word_multiply;
}

//returns the number of tiles remaining
get_tiles_remaining = function(){
    var tr = 0, char;
    for(var i = 0; i < Object.keys(ScrabbleTiles).length; i++) {
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

    for(var i = 0; i < scrabble_board.length; i++) {
        scrabble_board[i].occupied = false;
        scrabble_board[i].letter = "";
    }
    tile_rack = [];

}

//clears board and adds new tiles to tile rack
update_tile_rack = function(){
    $(".on_board").remove();
    for(var i = 0; i < scrabble_board.length; i++) {
        scrabble_board[i].occupied = false;
        scrabble_board[i].letter = "";
    }

    for(var j = 0; j < 7; j++) {
        if(get_tiles_remaining() == 0) {
            break;
        }
        if(tile_rack[j].occupied) {
            //ScrabbleTiles[tile_rack[j].tile_id]["number-remaining"]
            continue;
        }
        char = get_random_tile();
        slot = $("#slot" + (j + 1));
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
        tile_rack[j] = {"tile_id": char, "occupied": true};
        ScrabbleTiles[char]["number-remaining"]--; 
    }
}

//handles when submit word button is pressed
//removes used tiles from tiles structure and provides 7 new tiles
submit_word = function(){
    var empty_tile_rack = true;
    if(calculate_score(get_word()) == "-" || calculate_score(get_word()) == 0) {
        return;
    }
    
    total_score += Number($("#score").text());
    $("#total").text(total_score);

    update_tile_rack();
    for(var i = 0; i < 7; i++) {
        if (tile_rack[i].occupied) {
            empty_tile_rack = false
        }
    }
    display_scoreboard_info();
    if(get_tiles_remaining() == 0 && empty_tile_rack) {
        $("#game_over").html("<h2>Game Over</h2><h2>Final Score: " + total_score);
    }
}

//clears scoreboard and puts all tiles back into tiles structure by resetting number of tiles remaining
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

get_random_tile = function() {
    var allTiles = [];
    for(key in ScrabbleTiles) {
        for(j = 0; j < ScrabbleTiles[key]["number-remaining"]; j++) {
            allTiles.push(key);
        }
    }
    index = get_random_index(0, allTiles.length);
    return allTiles[index];
}

//displays 7 random tiles
display_tiles = function(){
    for(i = 0; i < 7; i++) {
        
        char = get_random_tile();
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
        ScrabbleTiles[char]["number-remaining"]--;
    }
}


//handles drawing scrabble game board to screen
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

    //handles dropping tiles onto the game board
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
                tile_rack[rack_num].tile_id = "";
                scrabble_board[index].occupied = true;
                scrabble_board[index].letter = id;
                display_scoreboard_info();
            }
         },
         tolerance: "touch"
    });
    
    //handles dropping tiles into the rack
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
                tile_rack[previous_slot].tile_id = "";
                tile_rack[index].occupied = true;
                tile_rack[index].tile_id = id;
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
                tile_rack[index].tile_id = id;
                scrabble_board[board_num].occupied = false;
                scrabble_board[board_num].letter = "";
                display_scoreboard_info();
            }
        },
        tolerance: "touch"
    });

    
});
