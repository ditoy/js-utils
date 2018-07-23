/**
 *
 * @param items array of items to loop
 * @param callback function that takes individual items as argument
 * @returns {Array}
 */
const forEach = (items, callback) => {
    let res = [];
    for(let i = 0; i < items.length; i++) {
        let item = items[i];
        res.push(callback(item));
    }

    return res;
};

export { forEach };