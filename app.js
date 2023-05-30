
// 2 Dimention Array 
// Highest Scorer and score selection
let playerInfo = [ 
    ['masrafee', 44 ],
    ['sakib', 45 ],
    ['tamim', 46 ],
    ['musfik', 47],
    ['mahmudullah', 48 ],
    ['afif', 49 ],
    ['hridoy', 41 ],
    ['mominul', 42 ],
    ['rubel', 43 ]
];



function highestRunScorer(playerInfo){
    // console.log(playerInfo); //{for justify}
    // console.log(playerInfo[3]);

    let topScorer = playerInfo[0][0];
    let maxScore = playerInfo[0][1];
    let length = playerInfo.length;

    for(let i= 0; i < length; i++){

        if(maxScore < playerInfo[i][1]){
            maxScore = playerInfo[i][1]
            topScorer = playerInfo[i][0]
        }
    }
    return [topScorer, maxScore];
 
}

document.write( `The Highest Scorer is `+ highestRunScorer(playerInfo) +` is his Score `);
