const binaryAgent = str =>

str
.split(' ')
.map(element => String.fromCharCode(parseInt(element,2)))
.join('');
