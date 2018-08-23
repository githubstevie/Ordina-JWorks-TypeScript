var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
        var godfather = new Movie("the Godfather", "drama", "maffiablabla", 40, "GF");
        var jepenjanneke = new Book("Jip en Janneke", new Author("Herman Brusselsmans"), "kinderen", "JJ");
        this.items.push(godfather);
        this.items.push(jepenjanneke);
    }
    Library.prototype.publishItems = function () {
        var itemContainer = document.getElementById("items");
        this.items.forEach(function (item) { return item.render(itemContainer); });
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map