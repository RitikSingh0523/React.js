

const searchResult = () => {
    const [titleSearch, setTitleSearch] = useState('')
    const searchVal = titleSearch.toUpperCase();
    const getBook = (searchVal) => {
        const book = bookList.filter((book) => book.title.toUpperCase() === searchVal);

        console.log(book)
        return (
            <>
                <h1>Amazon Best Seller</h1>
                <section className="search">
                    <div className="formSearch">
                        <input name="" type="text" value={titleSearch} onChange={e => setTitleSearch(e.target.value)}></input>
                        <button onClick={getSingleBook} ><h4>Search</h4></button>
                    </div>
                </section>
                <section className="booklist">
                    {book.map((books) => {
                        return <Book {...books} key={books.id} />
                    })

                    }
                </section>
            </>
        );


    };
    const getSingleBook = () => {

        getBook(searchVal);
    };
}