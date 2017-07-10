import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {booksComponent} from './components/books.component';
import {book_detailsComponent} from './components/book_details.component';
import {add_bookComponent} from './components/add_book.component';
import {Edit_bookComponent} from './components/Edit_book.component';


const appRoutes: Routes = [
    {
        path:'',
        component: UserComponent
    },
    {
        path: 'books',
        component: booksComponent
    },
      {
        path: 'books/details/:id',
        component: book_detailsComponent
    },
      {
        path: 'books/add',
        component: add_bookComponent
    },
      {
        path: 'books/edit/:_id',
        component: Edit_bookComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);