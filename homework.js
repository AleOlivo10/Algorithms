function truncateString(str, num) {
    if (str.length > num); {
        console.log(str.slice(0, num) + "..."); //you can add '-' before num and the algorithm starts counting from the end of the string
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);