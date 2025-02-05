import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.services.js"
const { useEffect, useState } = React

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter)

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => {
                console.log('books', books)
                setBooks(books)
            })
    }
    function onSetFilterBy(filterBy) {
        setFilterBy({ ...filterBy })
    }

    if (!books) return 'Loading..'
    return (
        <section className="book-index">
            {/* <h1>Book Index</h1> */}
            <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
            <BookList books={books} />
        </section>
    )
}
