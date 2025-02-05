import { BookIndex } from "./pages/BookIndex.jsx"
import { Home } from "./pages/Home.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"

export function App() {
    const [page, setPage] = useState('books')
    function onSetPage(page) {
        setPage(page)
    }


    return (
        <section className="app">
            <AppHeader onSetPage={onSetPage} />
            <main className="main-layout">
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'books' && <BookIndex />}

                <Home />
                <BookIndex />
            </main>
        </section>
    )
}