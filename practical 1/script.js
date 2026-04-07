function checkCharacter() {
    let ch = document.getElementById("charInput").value;

    ch = ch.toLowerCase();

    if (ch === "") {
        document.getElementById("result").innerText = "Please enter a character.";
    }
    else if (ch >= 'a' && ch <= 'z') {

        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            document.getElementById("result").innerText = ch + " is a Vowel.";
        } 
        else {
            document.getElementById("result").innerText = ch + " is a Consonant.";
        }

    } 
    else {
        document.getElementById("result").innerText = "Invalid input! Enter a letter only.";
    }
}