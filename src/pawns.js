function intializeGame(squares){
    // initialize the board with the black and white pawns
    // in the center (othello rule)
    squares['d'][4] = 'B'
    squares['e'][5] = 'B'
    squares['d'][5] = 'W'
    squares['e'][4] = 'W'
    return squares
}

// board naming for cols and rows
const col = ['a','b','c','d','e','f','g','h']
const row = [1,2,3,4,5,6,7,8]


//--------------------------------------------------
// the following function give the square position 
// starting from a square and a given direction
//--------------------------------------------------
// schema of direction given a square position 'li' 
// tl tt tr
// ll li rr
// bl bb br

function tt([l,i]){
    // given a position it returns the position 
    // o a square following the given direction:
    // top-top
    l = col[ col.indexOf(l) ]
    i = row[ row.indexOf(i) + 1 ]

    let new_position = (l && i)? [l,i] : null
    return new_position
}

function bb([l,i]){
    // given a position it returns the position 
    // o a square following the given direction:
    // bottom-bottom
    l = col[ col.indexOf(l) ]
    i = row[ row.indexOf(i) - 1 ]

    let new_position = (l && i)? [l,i] : null
    return new_position
}

function ll([l,i]){
    // given a position it returns the position 
    // o a square following the given direction:
    // left-left
    l = col[ col.indexOf(l) - 1 ]
    i = row[ row.indexOf(i) ]

    let new_position = (l && i)? [l,i] : null
    return new_position
}

function rr([l,i]){
    // given a position it returns the position 
    // o a square following the given direction:
    // right-right
    l = col[ col.indexOf(l) + 1 ]
    i = row[ row.indexOf(i) ]

    let new_position = (l && i)? [l,i] : null
    return new_position
}

function tr([l,i]){
    // given a position it returns the position 
    // o a square following the given direction:
    // top-right
    l = col[ col.indexOf(l) + 1 ]
    i = row[ row.indexOf(i) + 1 ]

    let new_position = (l && i)? [l,i] : null
    return new_position
}

function bl([l,i]){
    // given a position it returns the position 
    // o a square following the given direction:
    // bottom-left
    l = col[ col.indexOf(l) - 1 ]
    i = row[ row.indexOf(i) - 1 ]

    let new_position = (l && i)? [l,i] : null
    return new_position
}

function tl([l,i]){
    // given a position it returns the position 
    // o a square following the given direction:
    // top-left
    l = col[ col.indexOf(l) - 1 ]
    i = row[ row.indexOf(i) + 1 ]

    let new_position = (l && i)? [l,i] : null
    return new_position
}

function br([l,i]){
    // given a position it returns the position 
    // o a square following the given direction:
    // bottom-right
    l = col[ col.indexOf(l) + 1 ]
    i = row[ row.indexOf(i) - 1 ]

    let new_position = (l && i)? [l,i] : null
    return new_position
}

module.exports = {tt, bb, ll, rr, tr, bl, tl, br, intializeGame}

// tests for direction functions
console.log(tt(['g',1])) //g2
console.log(bb(['g',1])) //null
console.log(bb(['d',2])) //d1
console.log(rr(['g',1])) //h1
console.log(ll(['g',1])) //f1
console.log(tr(['g',1])) //h2
console.log(bl(['g',1])) //null
console.log(bl(['d',2])) //c1
console.log(tl(['d',2])) //c3
console.log(br(['d',2])) //e1