function cutOverview(overview) {
    const stringLength = 100;
    let cutted = overview.substring(0, stringLength);
    for(let i = stringLength; i <= overview.length; i++) {
        if(overview[i] !== '.') {
            cutted += overview[i];
        } else {
            cutted += '.';
            break;
        }
    }
    return cutted;
}

export default cutOverview;