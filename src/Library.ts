class Library {

    items:Array<Item>;

    constructor(public books: Array<Book>,public movies:Array<Movie>){

    }

    static fromJSON(data: any) : Library {
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books,movies);
    }
    getAll(): Array<Item> {
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }

    addMovie():void{
        this.items = [];
        let movie:Movie = new Movie("the Godfather", "drama",
            "good movie", 45, "TG");
        this.items.push(movie);

        var articleContainer:HTMLElement = document.getElementById("items");
        this.items.forEach(article => article.render(articleContainer));
    }

    addBook():void{
        this.items = [];
        let book:Book = new Book("Mijn biografie", new Author("Marc de Bel"),
            "thriller", "MB");
        this.items.push(book);

        var articleContainer:HTMLElement = document.getElementById("items");
        this.items.forEach(article => article.render(articleContainer));
    }
}