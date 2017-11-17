/* INSTRUCTIONS
//
// Welcome to your technical interview. Over the next 45 minutes, you
// will be given a series of three programming questions. For each question, you
// will have 15 minutes to write a solution in Ruby, Python, JavaScript, Perl,
// PHP, or Java. We accept partial solutions, and overall logic is more important
// to us than exact syntax, so try not to stress if your solution is incomplete
// or imperfect. Take a deep breath and focus on your approach to the next
// problem.
//
// Talk us through your approach as you work through the problem.  We need to know
// how you communicate the way that you solve problems.  Some people prefer to talk
// while they come to a solution, while other people prefer to walk us through
// after they've done a bit of work.  Either way is fine.
//
// We want to evaluate you on your own work, so the interview is closed-book. You
// are not permitted to consult any outside sources: don't ask others for help,
// search the web for solutions, or refer to any notes or code you may have
// written previously. Don't run your code in any REPL or interpreter, and don't
// share these questions or your solutions with anyone else (even anonymously).
// We take cheating very seriously, and violation is grounds for rejection or
// dismissal from the course.
//
// That said, you may ask your interviewer any questions you might have. We are
// more than happy to help clarify the question or let you know the right syntax
// for the language you're using.
//
// Good luck!
*/

/*------------------------------------------------------------------------------
// inAllStrings
//
// Write a function `inAllStrings(longStrings, shortString)``
// Check if a `shortString` is inside of ALL of the strings in the `longStrings` array.
// The function should return `true` if the `substring` is inside of every string
// of the `longStrings` array.
//
// Examples:
//
// inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "sisa") => true
// inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "isan") => false
// inAllStrings(["gandalf", "aragorn", "sauron"], "sam") => false
// inAllStrings(["axe", "ajax", "axl rose"], "ax") => true
------------------------------------------------------------------------------*/

function inAllStrings(longStrings, shortString){
    for(var i = 0; i < longStrings.length; i++){
        if (longStrings[i].indexOf(shortString) === -1){
            return false;
        }
    }
    return true;
}

/*------------------------------------------------------------------------------
// repeatedChars
//
// Write a function `repeatedChars(word) `which takes a string
// and returns an array of all the characters in word that
// appear in a streak (i.e. more than once consecutively).
// This should be case-sensitive.
//
// Examples:
// repeatedChars("aaabaa") => ["a", "a"]
// repeatedChars("mississippi") => ["s", "s", "p"]
// repeatedChars("SSassSS") => ["S", "s", "S"]
//"aaaabaa"
------------------------------------------------------------------------------*/

function repeatedChars (word){
    var result = [];
    //['a']
    var count = 0;
    for (var i = 0; i < word.length; i++){
        //i = 6
        var curr = word[i];//b
        var next = word[i+1];//a
        if (curr === next){
            count++//count = 0
        } else {
            if (count >= 1){
                result.push(curr);
            }
            count = 0;
        }
    }
    return result
}

// vigenereCipher
//
// Caesar's cipher takes a word and encrypts it by offsetting each letter in
// the word by a fixed number, the key. For a key of 3, for example:
// a -> d, p -> s, and y -> b
//
// Vigenere's Cipher is a Caesar cipher, but instead of a single key, a sequence
// of keys is used. For example, if we encrypt "bananasinpajamas" with the
// key sequence [1, 2, 3], the result would be "ccqbpdtkqqcmbodt":
//
// Word:   b a n a n a s i n p a j a m a s
// Keys:   1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
// Cipher: c c q b p d t k q q c m b o d t
//
// Write a funcition `vigenereCipher(string, keySequence, alphabet)` that takes a
// string and a key-sequence, returning the encrypted word.
//
// We're giving you the alphabet as an array if you need it:
//
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//
// Examples:
// vigenereCipher("toerrishuman", [1], alphabet) => "upfssjtivnbo"
// vigenereCipher("toerrishuman", [1, 2], alphabet) => "uqftsktjvobp"
// vigenereCipher("toerrishuman", [1, 2, 3], alphabet) => "uqhstltjxncq"

function vigenereCipher(string, keySequence, aplhabet){
    var result = '';
    var letters = string.split('');
    for(var i =0; i<letters.length; i++){
        var letter = letters[i];
        var key = keySequence[i%keySequence.length];
        letters[i] = ceaserCipher(letter, key, alphabet);
    }
    return letters.join('');
}

function ceaserCipher(letter, key, alphabet){
    var result = '';
    var index = alphabet.indexOf(letter);
    result = alphabet[(index + key)%alphabet.length];
    return result;
}
