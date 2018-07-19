export const LISTS_LOAD = 'LISTS_LOAD';
export const LISTS_POINT = 'LISTS_POINT';

export function listsLoad(json) {
    return {type: LISTS_LOAD, json}
}

export function LISTS_POINT() {
    return {type: LISTS_POINT}
}