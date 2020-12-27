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

function getClassName(char) {
    switch (char.toLowerCase()) {
        case 'o':
            return 'my-blue';
        case 'r':
            return 'my-orange';
        default:
            return '';
    }
}

function getText(match) {
    if (!!match) {
        const className = getClassName(match);

        return `<span class='${className}'>${match}</span>`;
    }

    return '';
}

function highlightChars(html) {
    return html.replace(/o/gi, getText).replace(/r/gi, getText);
}

function getData() {
    fetch('lorem.html')
        .then(data => data.text())
        .then(
            html => {
                html = highlightChars(html);

                document.querySelector('.container').innerHTML = html;
            }
        );
}

getData();