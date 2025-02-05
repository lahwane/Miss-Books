export function AppHeader({ onSetPage }) {
return (
    <header className="app-header full main-layout">
        <section>
            <h1>Miss Book</h1>
            <nav className="app-nav">
                <a onClick={()=>onSetPage('home')} href="#">Home</a>
                <a onClick={()=>onSetPage('about')} href="#">About</a>
                <a onClick={()=>onSetPage('books')} href="#">Books</a>

            </nav>
        </section>

    </header>
)
}