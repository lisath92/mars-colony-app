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
var core_1 = require('@angular/core');
var posts_services_1 = require('../shared/services/posts-services');
var PostsComponent = (function () {
    function PostsComponent(postService) {
        var _this = this;
        this.postService = postService;
        postService.getPosts()
            .then(function (postReports) { return _this.posts = postReports; });
    }
    PostsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-posts',
            templateUrl: 'posts.component.html',
            styleUrls: ['posts.component.css'],
            providers: [posts_services_1.PostService]
        }), 
        __metadata('design:paramtypes', [posts_services_1.PostService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map