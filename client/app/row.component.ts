import { Component, Input } from '@angular/core';




@Component({
    selector: 'row',
    moduleId: module.id,
    templateUrl: 'row.html',
    styles: [`#addHuman{ text-algin:left;color:blue;} #clickableAwesomeFont {  cursor: pointer}
   td textarea{
       width:100%;
   }
   .sno{
       max-width:2ch;
   }
   .name{
       max-width:20ch;
         word-wrap: break-word;
   }
    .age{
       max-width:2ch;
   }
   .desc{
       max-width:40ch;
        word-wrap: break-word;
   }`]
      
   
})
export  class RowComponent {
   
    @Input() human:any;
    @Input() i:number;
    showEditable: boolean = false;
    editRowId: any;
    toggle(val) {
        this.editRowId = val;
    }

    editHuman(id){
         this.toggle(id) ;
    }

}