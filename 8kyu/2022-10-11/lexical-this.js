/* Lexical this
Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
Output
Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property. */

var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      
      fillFriends(f) { 
        this._friends = this._friends.concat(f);
        return this._friends;
      }
    }
    return person;
  }