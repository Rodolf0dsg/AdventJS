function createCube(size) {
    let top = '';
    let bottom = '';
    let forSpaces = 0;
    for (let i = 1; i <= size; i++) {
        top += `${' '.repeat(size - i)}`;
        top += `${'/\\'.repeat(i)}${'_'}`;
        top += `${'\\_'.repeat(size - 1)}`;
        top += `${'\\'}\n`;
        bottom += `${' '.repeat(forSpaces)}`;
        bottom += `${'\\/'.repeat((size - i) + 1)}`;
        bottom += `${'_/'.repeat(size)}\n`;
        forSpaces += 1;
    }
    return top+bottom.substring(0, bottom.length -1)
}
