const messages = [
    'Diego',
    'Messi',
    'Jesica',
    'Ivo',
    'Micaela',
    'Oscar'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };