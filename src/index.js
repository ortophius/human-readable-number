module.exports = function toReadable (number) {
  if (number === 0) return 'zero';

  const digits = 
    ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decades = 
   ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  number = String(number)
    .split('')
    .map((num) => Number(num))
    .reverse();

  const res = [];

  for (let i = 0; i < number.length; i++) {
    if (number[i] === 0) continue;
    switch ((i + 1) % 3) {
      case 1:
        const nextDigit = (number[i + 1] !== undefined) ? number[i + 1] : 0;
        const num = Number(nextDigit + String(number[i]));
        if (nextDigit < 2) {
          if (nextDigit === 1) i++;
          res.push(digits[num - 1]);
        }
        else res.push(digits[number[i] - 1]);
        break;
      case 2:
        res.push(decades[number[i] - 1]);
        break;
      case 0:
        res.push(`${digits[number[i] - 1]} hundred`);
        break;
    }
  }

  return res.reverse().join(" ");
}
