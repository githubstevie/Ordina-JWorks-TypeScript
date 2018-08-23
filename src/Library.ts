class Library {
    items:Array<Item> = [];

    constructor(public books:Array<Book>,public movies:Array<Movie>){

    }

    static fromJSON(data: any) : Library {
       // todo Initialise the two arrays with the external json resource
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val))

        return new Library(books, movies);
    }

    getAll():Array<Item>{
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }

}