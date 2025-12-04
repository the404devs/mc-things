function generateCommand() {
    const pages = document.querySelectorAll(".card.page .link-container .typable");
    const author = "the404";
    const title = "book test";
    let pageComponentString = '';
    pages.forEach(page => {
        console.log(page.textContent);
    });
    
    let output = `/give @p minecraft:written_book[minecraft:written_book_content={pages:[], author:${author}, title:${title}}]`;
    document.querySelector('#command-output').value = output;
}