import { Component } from '@angular/core';
import { HumanService } from './app.service';



@Component({
    selector: 'human',
    moduleId: module.id,
    templateUrl: 'human.html',
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
    .days{
       max-width:2ch;  
       word-wrap: break-word;
   }
   .controls
   {
       max-width:2ch; 
       width:8%;
   }
   .desc{
       max-width:40ch;
        word-wrap: break-word;
   }
     `],
    providers: [HumanService]
})

export class HumanComponent {
    humans: Array<any>;
    name: string;
    days: number;
    desc: string;
    namePlusDays: string;
     showEditable: boolean = false;
    editRowId: any;
    isDisabled:boolean = false;
    


    constructor(private humanService: HumanService) {

        this.namePlusDays = "";
        humanService.getHumans().subscribe(response => {
            this.humans = response;
        })

    }

    toggle(val) {
        this.editRowId = val;
    }

    editHuman(id){
         this.toggle(id) ;
    }

    addHuman() {
        var human = {
            name: this.name,
            days: this.days,
            desc: this.desc

        }
        // this.namePlusAge = "Name:" + human.name + ",Age:" + human.age;
        // console.log(human);
        this.humanService.addHuman(human)
            .subscribe(data => {
                console.log('Success in addHuman');
                console.log(data);
                //console.log(data);
                this.toggle("");
                this.humans.push(data);
            })
    }


    removeHuman(id) {
        // console.log(id);

        this.humanService.removeHuman(id)
            .subscribe(data => {
                console.log('Sucess fully deleting ' + JSON.stringify(data));
                // this.humans.de
                for (let i = 0; i < this.humans.length; i++) {
                    if (this.humans[i]._id === id) {
                        console.log(this.humans[i]._id + " === " + id);
                        //   delete this.humans.
                        this.humans.splice(i, 1);
                        //  break;
                    }
                }

            })
    }
   
    saveHuman(id) {
        console.log(id);
        for (let i = 0; i < this.humans.length; i++) {
            if (this.humans[i]._id === id) {
                console.log(this.humans[i]._id + " === " + id);
                console.log(this.humans[i]);

                // this.namePlusAge = "Name:" + human.name + ",Age:" + human.age;
                // console.log(human);
                this.humanService.updateHuman(this.humans[i])
                    .subscribe(data => {
                        console.log('Success');
                        //console.log(data);


                        this.toggle("");
                    })

            }
        }


    } 

}
