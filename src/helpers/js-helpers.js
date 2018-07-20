/**
 *
 * @param items array of items to loop
 * @param callback function that takes individual items as argument
 * @returns {Array}
 */
const forEach = function(items, callback) {
    var res = [];
    for(var i = 0; i < items.length; i++) {
        var item = items[i];
        res.push(callback(item));
    }

    return res;
};


export { forEach };