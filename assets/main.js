document.addEventListener('DOMContentLoaded', e => {
    // puts each emoji in a separate <span> element so they can be clicked
    document.querySelectorAll('p:not(.lead)').forEach(emojiParagraph => {
        const emojiChars = emojiParagraph.textContent.split(' ');
        emojiParagraph.textContent = '';
        emojiChars.forEach(emoji => {
            const span = document.createElement('span');
            span.classList.add('emoji');
            span.dataset.clipboardText = emoji;
            span.textContent = emoji;
            emojiParagraph.appendChild(span);
            emojiParagraph.appendChild(document.createTextNode(' '));
        });
    });

    // make the <span> elements copy to clipboard on click
    new ClipboardJS('.emoji');
});
