/**
 * 
 * @param {Function} func 
 * @param {Number} wait 
 * @returns 
 */
export function debounce(func, wait) {
    let timeout;

    return function execuedFunction(...args) {
        const later = () => {
            timeout = null
            func.apply(this, args)
        }

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}