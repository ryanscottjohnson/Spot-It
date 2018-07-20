import {
    LISTS_LOAD,
    LISTS_POINT
} from '../actions/spot-it.js';

let initialState = {
    score: 0,
    //TODO: add words to 'allWords' from card set
    allWords: ['',],
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
    let newWord;

    switch(action.type) {
        case LISTS_LOAD:
            let newList1 = [];
            let newList2 = [];

            let usedWords = [];

    }
}