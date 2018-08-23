var Library = /** @class */ (function () {
    function Library(books, movies) {
        this.books = books;
        this.movies = movies;
        this.items = [];
    }
    Library.fromJSON = function (data) {
        // todo Initialise the two arrays with the external json resource
        var books = data.books.map(function (val) { return Book.fromJSON(val); });
        var movies = data.movies.map(function (val) { return Movie.fromJSON(val); });
        return new Library(books, movies);
    };
    Library.prototype.getAll = function () {
        this.items = this.books.concat(this.movies);
        return this.items;
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map