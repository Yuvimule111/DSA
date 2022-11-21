function findSmallestSubstring(given_string) {
    for(let i = 0; i < given_string.length; i++) {
        let sub_str = "";
        for(let j = i; j < given_string.length; j++) {
            sub_str += given_string[i];
            console.log(sub_str);
        }
    }
}

let given_string = "AABBBCBBAC";
console.log(findSmallestSubstring(given_string));
