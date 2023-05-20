const books = [
    {
        id: 0,
        title: "Harry Potter",
        description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
        price: 419,
        image: "https://m.media-amazon.com/images/I/91R1AixEiLL.jpg",
        stock: 9,
        category: 'fantasy'
    },
    {
        id: 1,
        title: "Lord Of The Rings",
        description: "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
        price: 589,
        image: "https://images.cdn3.buscalibre.com/fit-in/360x360/2c/c8/2cc8d8b40389605434add789a1fc055d.jpg",
        stock: 5,
        category: 'fantasy'
    },
    {
        id: 2,
        title: "Emperatriz Divorciada",
        description: "Story of an empress who is being replaced by a seemingly innocent and young peasant. But what is really going on in the background and will she forgive her husband or will she find love in another kingdom?.",
        price: 99,
        image: "https://1.bp.blogspot.com/-fDXaP9ZjcZ0/YDgsFMifRYI/AAAAAAAAU0Q/GfK52RnFkUUDljaJZwI4Ky5kB5DRf_JhwCLcBGAsYHQ/s475/Remarried%2BPortada%2BConejo%2BLit.jpg",
        stock: 12,
        category: 'fantasy'
    },
    {
        id: 3,
        title: "Eloquent JavaScript",
        description: "Eloquent JavaScript is a guide to JavaScript that focuses on good programming techniques rather than offering a mish-mash of cut-and-paste effects. The author teaches you how to leverage JavaScript's grace and precision to write real browser-based applications.",
        price: 319,
        image: "https://http2.mlstatic.com/D_NQ_NP_815701-MLA49286758059_032022-O.jpg",
        stock: 19,
        category: 'programming'
    },
    {
        id: 4,
        title: "Si la vida nos da limones",
        description: "En esta obra se plantean las experiencias de estrés en nuestra vida cotidiana, experiencias que son como la vida misma porque no hay vida sin estrés.",
        price: 449,
        image: "https://http2.mlstatic.com/D_NQ_NP_838439-MLA49350137143_032022-O.jpg",
        stock: 32,
        category: 'self-help'
    }
]

export const getBooks = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(books)
        }, 200)
    })
}

export const getBook = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const book = books.find(bookData => bookData.id === parseInt(id));
            resolve(book);
        }, 200)
    })
}

export const getBooksByCategory = (category) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const booksFromCategory = books.filter(book => book.category === category)
            resolve(booksFromCategory);
        }, 200)
    })
}
