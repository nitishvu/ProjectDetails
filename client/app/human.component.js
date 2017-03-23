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
var app_service_1 = require("./app.service");
var HumanComponent = (function () {
    function HumanComponent(humanService) {
        var _this = this;
        this.humanService = humanService;
        this.showEditable = false;
        this.isDisabled = false;
        this.namePlusDays = "";
        humanService.getHumans().subscribe(function (response) {
            _this.humans = response;
        });
    }
    HumanComponent.prototype.toggle = function (val) {
        this.editRowId = val;
    };
    HumanComponent.prototype.editHuman = function (id) {
        this.toggle(id);
    };
    HumanComponent.prototype.addHuman = function () {
        var _this = this;
        var human = {
            name: this.name,
            days: this.days,
            desc: this.desc
        };
        // this.namePlusAge = "Name:" + human.name + ",Age:" + human.age;
        // console.log(human);
        this.humanService.addHuman(human)
            .subscribe(function (data) {
            console.log('Success in addHuman');
            console.log(data);
            //console.log(data);
            _this.toggle("");
            _this.humans.push(data);
        });
    };
    HumanComponent.prototype.removeHuman = function (id) {
        // console.log(id);
        var _this = this;
        this.humanService.removeHuman(id)
            .subscribe(function (data) {
            console.log('Sucess fully deleting ' + JSON.stringify(data));
            // this.humans.de
            for (var i = 0; i < _this.humans.length; i++) {
                if (_this.humans[i]._id === id) {
                    console.log(_this.humans[i]._id + " === " + id);
                    //   delete this.humans.
                    _this.humans.splice(i, 1);
                }
            }
        });
    };
    HumanComponent.prototype.saveHuman = function (id) {
        var _this = this;
        console.log(id);
        for (var i = 0; i < this.humans.length; i++) {
            if (this.humans[i]._id === id) {
                console.log(this.humans[i]._id + " === " + id);
                console.log(this.humans[i]);
                // this.namePlusAge = "Name:" + human.name + ",Age:" + human.age;
                // console.log(human);
                this.humanService.updateHuman(this.humans[i])
                    .subscribe(function (data) {
                    console.log('Success');
                    //console.log(data);
                    _this.toggle("");
                });
            }
        }
    };
    return HumanComponent;
}());
HumanComponent = __decorate([
    core_1.Component({
        selector: 'human',
        moduleId: module.id,
        templateUrl: 'human.html',
        styles: ["#addHuman{ text-algin:left;color:blue;} #clickableAwesomeFont {  cursor: pointer}\n   td textarea{\n       width:100%;\n   }\n   .sno{\n       max-width:2ch;\n   }\n   .name{\n       max-width:20ch;\n         word-wrap: break-word;\n   }\n    .days{\n       max-width:2ch;  \n       word-wrap: break-word;\n   }\n   .controls\n   {\n       max-width:2ch; \n       width:8%;\n   }\n   .desc{\n       max-width:40ch;\n        word-wrap: break-word;\n   }\n     "],
        providers: [app_service_1.HumanService]
    }),
    __metadata("design:paramtypes", [app_service_1.HumanService])
], HumanComponent);
exports.HumanComponent = HumanComponent;
//# sourceMappingURL=human.component.js.map