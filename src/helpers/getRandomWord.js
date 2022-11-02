export const getRandomWord = async (length) => {
    console.log(length)
    const url = `https://random-word-api.herokuapp.com/word`;
    const response = await fetch(url);
    const word = await response.json().then(wrd =>{
        return wrd[0]
    });
    
    return word;
}