function royalWe(sentence){
  var royal = {
    'I':'we',
    mine:'ours',
    my:'our',
    me:'us',
  }
  var words = sentence.split(' ');
  for (var i = 0; i < words.length; i++){
    if (royal[words[i]] !== undefined){
      words[i] = royal[words[i]];
    }
  }
  return words.join(' ');
}

console.log(royalWe("I want to go to the store"));
console.log(royalWe("This is my house and you will respect me"));
console.log(royalWe("This is mine"));
console.log(royalWe("Jump for my love"));
console.log(royalWe("I want to go to the store"));
