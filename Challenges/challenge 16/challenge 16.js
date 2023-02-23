function fixLetter(letter) {
  let ans =  letter.trim();
  ans = ans.replaceAll('santa',  'Santa');
  ans = ans.replaceAll('claus', 'Claus')
  ans = ans.replace(/ ,/g, ', ')
  ans = ans.replace(/ [.]/g, '. ')
  ans = ans.replace(/  +/g, ' ')
  ans = ans.replace(/[??]+/g, '?')
  ans = ans.replace(/(\s+([,.?!]))/g,(m, s1, s2) => s2)
  ans = ans.replace(/^([A-z])/, (m, p) => p.toUpperCase())
  ans = ans.replace(/([?.!])\s+([A-z])/g, (m, s1, s2) => `${s1} ${s2.toUpperCase()}`)
  ans = ans.replace(/(,[A-Za-z])/g, ((x) => `, ${x.substring(x.length, 1)}`))
  ans = ans.replace(/([A-z])$/, (m, s) => `${s}.`);
return ans;   
}
