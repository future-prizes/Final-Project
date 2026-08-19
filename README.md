Project submission for javascript basics course

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

I used the localStorage API to create a persistent array that can be added to and elements deleted with optional 'moods' for each entry. Uses addEventListeners to attach functions 
to specific HTML elements; the slice() method to select the 5 most recent elements and add them to the front page (index.html), and splice() to remove an entry
from the array in the vault.html page which also displays all entries.

localStorage accepts only strings using the JSON.stringify() method and data structures can be retrieved using the JSON.parse() method. 
E.g. localStorage.setItem("entries", JSON.stringify(entry)) -> will add this key:value pair to the localstorage object with 'entries' as the key and the stringified value 
of entry. If the key already exists, it will add the new value to the one that already exists.
In this case, entries is an array of objects with 3 properties.

The array is retrieved using JSON.parse(localStorage.getItem("entries")). This is assigned to a variable, entries, 
const top5 = entries.slice(0,5) creates a new variable using all elements between the 0 and 5 indexes of the array, but not including 5 (i.e. 0-4).
A .forEach() loop is used for each of these 5 elements to create HTML elements and apply classes to build the index.html page. 

The vault page uses a similar approach but no slice() is used. 
