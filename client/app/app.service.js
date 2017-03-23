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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HumanService = (function () {
    function HumanService(http) {
        this.http = http;
    }
    HumanService.prototype.addHuman = function (human) {
        //     console.log("inside human service");
        //     console.log( human);
        //   console.log("inside human service"+ human);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/human", JSON.stringify(human), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    HumanService.prototype.updateHuman = function (human) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/updateHuman", JSON.stringify(human), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    HumanService.prototype.getHumans = function () {
        // var headers = new Headers();
        //  headers.append('Content-Type','application/json');
        return this.http.get("/api/human")
            .map(function (response) { return response.json(); });
    };
    HumanService.prototype.removeHuman = function (id) {
        return this.http.delete("/api/human/" + id)
            .map(function (response) { return response.json(); });
    };
    return HumanService;
}());
HumanService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HumanService);
exports.HumanService = HumanService;
//# sourceMappingURL=app.service.js.map