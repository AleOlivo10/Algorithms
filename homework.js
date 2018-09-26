function truncateString(str, num) {
    if (str.length > num && num >3); {
        console.log(str.slice(0, num) + "...");
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 15);