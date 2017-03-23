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
var RowComponent = (function () {
    function RowComponent() {
        this.showEditable = false;
    }
    RowComponent.prototype.toggle = function (val) {
        this.editRowId = val;
    };
    RowComponent.prototype.editHuman = function (id) {
        this.toggle(id);
    };
    return RowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RowComponent.prototype, "human", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RowComponent.prototype, "i", void 0);
RowComponent = __decorate([
    core_1.Component({
        selector: 'row',
        moduleId: module.id,
        templateUrl: 'row.html',
        styles: ["#addHuman{ text-algin:left;color:blue;} #clickableAwesomeFont {  cursor: pointer}\n   td textarea{\n       width:100%;\n   }\n   .sno{\n       max-width:2ch;\n   }\n   .name{\n       max-width:20ch;\n         word-wrap: break-word;\n   }\n    .age{\n       max-width:2ch;\n   }\n   .desc{\n       max-width:40ch;\n        word-wrap: break-word;\n   }"]
    })
], RowComponent);
exports.RowComponent = RowComponent;
//# sourceMappingURL=row.component.js.map