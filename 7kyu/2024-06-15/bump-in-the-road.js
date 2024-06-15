/* Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
 */

function bump(x){
    // param : string of either ___ or n
    // return: 'Wohoo' if (n <= 15) or 'Car Dead'
    // example: 
    // iterate over the array using a loop
    const enough = x.split('').reduce((acc, elem, i) => elem === 'n' ? acc + 1 : acc + 0, 0);
    return enough <= 15 ? 'Woohoo!' : 'Car Dead';
    }
