function generarColorAleatorio(){
    const color = Math.floor(Math.random()).toString(16);
    return "#" + color.padStart(6, 0);
};