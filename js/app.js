const target = document.querySelectorAll('.split-test')
const results = Splitting({ target: target, by: 'lines' });
const lines = results[0].lines
console.log(results)
const newlines = lines.map((el) => {
    return el.map((el) => {
        return el.textContent
    })
})
const newest = newlines.map((line) => {
    return line.join(' ')
})

function createObserver() {
    let observer

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: buildThresholdList(),
    }

    observer = new IntersectionObserver(handleIntersect, options)
    observer.observe(boxElement)
}

console.log(newest)
console.log(newlines)
gsap.from(results[0].lines, {
    duration: 5.5,
    opacity: 0,
    ease: 'back',
    rotationX: -120,
})