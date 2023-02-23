function countHours(year, holidays) {
    let ans = 0;
    holidays.forEach(element => {
        const date = new Date(`${element}/${year}`);
        const day = date.getDay();
        if (day > 0 && day < 6) {
            ans = ans + 2;
        }
    });
    return ans;
}
