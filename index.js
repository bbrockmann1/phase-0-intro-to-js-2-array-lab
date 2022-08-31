const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = () => {
    cats.push('Ralph');
};

const destructivelyPrependCat = () => {
    cats.unshift('Bob');
};

const destructivelyRemoveLastCat = () => {
    cats.pop();
}

const destructivelyRemoveFirstCat = () => {
    cats.shift();
}

const appendCat = (name) => {
    return [...cats, name];
}

const prependCat = (name) => {
    return [name, ...cats]
}

const removeLastCat = () => {
    return cats.slice(0, cats.length - 1);
}

const removeFirstCat = () => {
    return cats.slice(1);
}