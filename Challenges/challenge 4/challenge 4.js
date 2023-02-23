function fitsInOneBox(boxes) {
    let ans, ans1 = 0;
    function check(length, width, height){
        for (let j = 0; j < boxes.length; j++) {
            const length1 = boxes[j].l;
            const width1 = boxes[j].w;
            const height1 = boxes[j].h;

            if (length == length1 || width == width1 || height == height1) {
                continue;
            } else if (length < length1 || width < width1 || height < height1) {
                continue;
            } else {
                ans = ans + 1;
            }
        }
    }

    for (let i = 0; i < boxes.length; i++) {
        const length = boxes[i].l;
        const width = boxes[i].w;
        const height = boxes[i].h;
        ans = 0;
        check(length, width, height);
        if (ans == (boxes.length - 1)) {
            ans1 = 1;
        } 
    }

    if (ans1 == 1) {
        return true;
    } else {
        return false;
    };
}
