class Library {
    items:Array<Item> = [];

    constructor() {
        let godfather = new Movie("the Godfather", "drama",
            "maffiablabla", 40, "GF");
        let jepenjanneke = new Book("Jip en Janneke",
            new Author("Herman Brusselsmans"),
             "kinderen", "JJ");

        this.items.push(godfather);
        this.items.push(jepenjanneke);
    }


    publishItems():void {
        let itemContainer:HTMLElement = document.getElementById("items")
        this.items.forEach(item => item.render(itemContainer))
    }
}