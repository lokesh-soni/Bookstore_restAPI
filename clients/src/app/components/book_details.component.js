"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var posts_service_2 = require("../services/posts.service");


var book_detailsComponent = (function () {
    function book_detailsComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
    
        this.postsService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    return book_detailsComponent;
}());
book_detailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'book_details',
        templateUrl: 'book_details.component.html',
        providers: [posts_service_2.PostsService]

    }),
    __metadata("design:paramtypes", [posts_service_2.PostsService])

], 
book_detailsComponent);
exports.book_detailsComponent = book_detailsComponent;
//# sourceMappingURL=book_details.component.js.map