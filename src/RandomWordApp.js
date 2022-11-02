import React,{ useState } from 'react';
import {Button} from './components/Button';
import WordContainer from './components/WordContainer'
import { getRandomWord } from './helpers/getRandomWord';
const RandomWordApp=()=>{
  const [word,setWord]=useState(['Word Goes Here']);
  
  async function getWord(){
    const word = await getRandomWord().then(word => word);
    setWord(word);
  }
  return (
    <>
      <div className="text-center">
        <Button text={"Word"}onClick={getWord}></Button>
      </div>
      <br></br>
      <WordContainer word={word}></WordContainer>
      <br></br>
      
    </>

  )
}

export default RandomWordApp;