var Library = /** @class */ (function () {
    function Library(books, movies) {
        this.books = books;
        this.movies = movies;
    }
    Library.fromJSON = function (data) {
        var books = data.books.map(function (val) { return Book.fromJSON(val); });
        var movies = data.movies.map(function (val) { return Movie.fromJSON(val); });
        return new Library(books, movies);
    };
    Library.prototype.getAll = function () {
        this.items = this.books.concat(this.movies);
        return this.items;
    };
    Library.prototype.addMovie = function () {
        this.items = [];
        var movie = new Movie("the Godfather", "drama", "good movie", 45, "TG");
        this.items.push(movie);
        var articleContainer = document.getElementById("items");
        this.items.forEach(function (article) { return article.render(articleContainer); });
    };
    Library.prototype.addBook = function () {
        this.items = [];
        var book = new Book("Mijn biografie", new Author("Marc de Bel"), "thriller", "MB");
        this.items.push(book);
        var articleContainer = document.getElementById("items");
        this.items.forEach(function (article) { return article.render(articleContainer); });
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map