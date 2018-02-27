function scrollTo(params) {
    const {
        element,
        to,
        duration
    } = params;

    var start = element.scrollY,
        change = to - start,
        increment = 1000 / 50;

    var animateScroll = function(elapsedTime) {        
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);                        
        element.scrollTo(0, position); 
        if (elapsedTime < duration) {
            window.requestAnimationFrame(animateScroll.bind(null, elapsedTime));
        }
    };

    window.requestAnimationFrame(animateScroll.bind(null, 0));
}

function easeInOut(currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}

export default scrollTo;