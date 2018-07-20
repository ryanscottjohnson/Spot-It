import {
    LISTS_LOAD,
    LISTS_POINT
  } from '../actions/spot-it.js';
  // import uuidv1 from 'uuid/v1';
  
  let initialState = {
    score: 0,
    allWords: ['flower', 'garden', 'ball', 'key', 'frog', 'apple', 'ice', 'grass', 'crown', 'eyeball', 'dress', 'shoes', 'icecream', 'skateboard', 'car', 'lipstick', 'hairbrush', 'princess', 'castle', 'tire', 'hammer', 'door', 'window', 'skates', 'sandals', 'flipflops', 'tree', 'rose', 'milkshake', 'dog', 'cat', 'milk', 'cow', 'farm', 'fence', 'road', 'snowman', 'snowflake', 'cloud', 'sun', 'juice', 'glass', 'apron', 'knife', 'fork', 'belly', 'coat', 'rain', 'sigh', 'punch', 'kick', 'love', 'revenge', 'gym', 'teacher', 'high', 'food'],
    list1: [],
    list2: [],
    commonWord: ''
  }
  
  export default function wordCardReducer(state, action) {
    if (state === undefined) {
      return initialState;
    }
  
    let newState = {};
    let currentWords;
    let newWord
  
    switch(action.type) {
      case LISTS_LOAD:
        let newList1 = [];
        let newList2 = [];
  
        let usedWords = [];
  
        for (let i = 0; i < 7; i++) {
          let randomIndex1 = Math.floor(Math.random() * initialState.allWords.length);
          let randomIndex2 = Math.floor(Math.random() * initialState.allWords.length);
          let randomWord1 = initialState.allWords[randomIndex1];
          let randomWord2 = initialState.allWords[randomIndex2];
  
          while (usedWords.indexOf(randomWord1) > -1 || usedWords.indexOf(randomWord2) > -1) {
            randomIndex1 = Math.floor(Math.random() * initialState.allWords.length);
            randomIndex2 = Math.floor(Math.random() * initialState.allWords.length);
            randomWord1 = initialState.allWords[randomIndex1];
            randomWord2 = initialState.allWords[randomIndex2];
          }
  
          newList1.push(randomWord1);
          newList2.push(randomWord2);
          usedWords.push(randomWord1);
          usedWords.push(randomWord2);
        }
        let commonIndex = Math.floor(Math.random() * initialState.allWords.length);
        let commonWord = initialState.allWords[commonIndex];
  
        while (usedWords.indexOf(commonWord) > -1) {
          commonIndex = Math.floor(Math.random() * initialState.allWords.length);
          commonWord = initialState.allWords[commonIndex];
        }
  
        newList1.push(commonWord);
        newList2.push(commonWord);
        usedWords.push(commonWord);
  
        newList1.sort(() => 0.5 - Math.random());
        newList2.sort(() => 0.5 - Math.random());
  
        newList1.reverse();
        newList1.push(newList1.shift());
        newList2.push(newList2.shift());
  
        newState.list1 = newList1;
        newState.list2 = newList2;
        newState.commonWord = commonWord;
  
        return Object.assign({}, state, newState);
      case LISTS_POINT:
        return Object.assign({}, state, {score: state.score + 1});
      default: return state;
    }
  }