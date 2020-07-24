const spinalCase = str => 

str
.match(/s\W|(\s\w+)|([A-Z][a-z]+)|(^[a-z]+)|-(\w+)/g)
.join()
.replace(/\s+|-/g,'')
.split(',')
.join('-')
.toLowerCase();
