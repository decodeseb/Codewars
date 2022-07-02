//Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!
//Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return 
//a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. 
//You can assume you will be given valid input.

//Example: charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}


function charFreq(message) {
    message = message.split('');
    let char = {};
    
    for(let i = 0; i < message.length; i++) {
      if(char[message[i]]) {
        char[message[i]]++
      } else char[message[i]] = 1;
    }
    
    return char;
  }
  
