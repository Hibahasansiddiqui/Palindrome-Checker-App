function palindrome(str) {
    event.preventDefault();
    
    var str = document.getElementById('input').value;
    var lowerAlpha = str.toLowerCase().replace(/[^a-z0-9]+/gi, "");
    var lowerAlphaReverse = lowerAlpha.split('').reverse().join('');
    
    if(lowerAlpha==lowerAlphaReverse && str.length>0){
      results.innerHTML = 'Oh yes, given word is a palindrome';
      document.getElementById("results").style.color = "green";
      word.innerHTML = str;
    } else {
      results.innerHTML = 'Oh no! given word is not a palindrome';
      document.getElementById("results").style.color = "red";
      word.innerHTML = str;
    }
  }