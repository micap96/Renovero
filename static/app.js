console.log("here we go");


/*
 * Hi there and welcome to this little coding kata. Here is what you should do in javascript:
 * 
 * 1. There is a file on the webserver, named lorem.html. It contains a lot of (html) text. 
 *    Write a javascript function, which fetches the contents of this file asynchronously 
 *    from the server and add the contents into the <div class="container"> div of the website.
 * 
 * 2. There are lots of o's in the imported text. As the letter o is very important for this exercise, 
 *    we should highlight it. Highlight all the o's with my-blue background (see styles.css for 
 *    more information about that color) and white font color, a 30% bigger font size and add some 
 *    padding so that every o stands out.
 * 
 * 3. The letter 'r' is also very important. Highlight it in the same way, but use the my-orange
 *    color this time.
 * 
 * 4. Instead of text with "meaning", the PO wants to have all the words which are placed in paragraph
 *    tags to be sorted in alphabetical order. Get rid of all the punctuation, just display the words
 *    in the right order. Example: <p>what a requirement</p> becomes <p>a requirement what</p>. 
 * 
 */

(function () {
    fetch('lorem.html')
        .then(data => data.text())
        .then(
            text => {
                if (!!text) {
                    const newParagraphText = getModifiedParagraphText(text);
                    const finalText = getHighlightText(newParagraphText);

                    document.querySelector('.container').innerHTML = finalText;
                }
            }
        );
}());

const getClassName = char => {
    switch (char.toLowerCase()) {
        case 'o':
            return 'my-blue';
        case 'r':
            return 'my-orange';
        default:
            return '';
    }
}

const getStylizedChars = matchText => {
    const className = getClassName(matchText);

    return !!matchText ? `<span class='highlight-text ${className}'>${matchText}</span>` : '';
}

const getHighlightText = text => {
    return text.replace(new RegExp('o|r','gi'), getStylizedChars);
}

const getCleanAndSortedText = matchText => {
    if (!!matchText) {
        // Remove punctuation
        matchText = matchText.replace(new RegExp('[.,\\/#!$%\\^&\\*;:{}=\\-_`~()?]', 'g'), "");
        // Sort alphabetically
        matchText = matchText.split(' ').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join(' ');
    }

    return matchText;
}

const getModifiedParagraphText = text => {
    return text.replace(new RegExp('(?<=<p>).*?(?=<\/p>)', 'g'), getCleanAndSortedText);
}