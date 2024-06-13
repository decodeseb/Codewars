/* Complete the function/method so that it returns the url with anything after the anchor (#) removed. 

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url){
    let index = url.split("").findIndex(elem => elem === "#");
    
    if (index === -1)
      return url;
    else 
      url = url.split("").slice(0, index).join("");
      return url;
  }

