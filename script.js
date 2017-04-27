function showTextStats() {

	var textInput = document.getElementById('textArea');
	var text = textInput.value;
	var wordCounter = 0;
	var sentenceCounter = 0;
	var spaceCounter = 0;


    //FOR LOOP WITH IF STATEMENT CONDITIONS
	for (var i = 0; i <= text.length; i++ ) {

        if (text[i] === ' ') {
            spaceCounter++;
            wordCounter++;
        }

        if (text[i]==='.' || text[i] === '?' || text[i] === '!') {
            sentenceCounter++;
        }

        //OUTPUT
        document.getElementById("totalWords").innerHTML = "Total Words: " + (wordCounter + 1);
        document.getElementById("totalSentences").innerHTML = "Total Sentences: " + sentenceCounter;
        document.getElementById("avgWordsPerSentence").innerHTML = "Average Words Per Sentence: " + ((wordCounter + 1 )/sentenceCounter);
        document.getElementById("totalSpaces").innerHTML = "Total Number of Spaces: " + spaceCounter;
    }
}
