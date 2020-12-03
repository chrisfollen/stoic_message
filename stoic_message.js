

//create function to generate a random number between (0) and (numIn - 1)
randNum = numIn => {
    return Math.floor(Math.random*numIn);
};


//create object containing arrays of message parts
const stoic = {
    quotes: ['Waste no more time arguing what a good man should be. Be one. - Marcus Aurelius', 
    'Don\'t explain your philosophy. Embody it. - Epictetus', 
    'Nothing, to my way of thinking, is a better proof of a well ordered mind than a man\'s ability' + 
    ' to stop just where he is a spend some time in his own company. - Seneca', 
    'I begin to speak only when I am certain what I\'ll say isn\'t better left unsaid. - Cato'],
    virtues: ['Wisdom', 'Justice', 'Courage', 'Moderation'],
    practices: ['Journal', 'Take a cold shower', 'Mediatate on death', 'Be grateful']
};


//create array for stoic messages
let wisdom = [];

//iterate through message types, calling random number function to select one of each message type
//store messages to be used in 'wisdom' array



console.log(stoic.quotes[2]);








//join messages as string + display final string


