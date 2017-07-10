"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var about_component_1 = require("./components/about.component");
var books_component_1 = require("./components/books.component");
var book_details_component_1 = require("./components/book_details.component");
var add_book_component_1 = require("./components/add_book.component");
var Edit_book_component_1 = require("./components/Edit_book.component");
var appRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'books',
        component: books_component_1.booksComponent
    },
      {
        path: 'books/details/:id',
        component: book_details_component_1.book_detailsComponent
    },
      {
        path: 'books/add',
        component: add_book_component_1.add_bookComponent
    },
      {
        path: 'books/edit/:id',
        component: Edit_book_component_1.Edit_bookComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map