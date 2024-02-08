
export function greetWorld() {
    return 'Hey, world!';
}

export function greet(name) {
    return 'Hey, ' + name + '!';
}

export function capitilizedGreet(name) {
    return ('Hey, ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!');
}