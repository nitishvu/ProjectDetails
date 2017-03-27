import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()

export class HumanService {

    constructor(private http: Http) { }

    addHuman(human) {
        //     console.log("inside human service");
        //     console.log( human);
        //   console.log("inside human service"+ human);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/project", JSON.stringify(human), { headers: headers })
            .map(response => response.json());

    }
    updateHuman(human){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/updateProject", JSON.stringify(human), { headers: headers })
            .map(response => response.json());
    }

    getHumans() {
        // var headers = new Headers();
        //  headers.append('Content-Type','application/json');
        return this.http.get("/api/project")
            .map(response => response.json());
          

    }

    removeHuman(id){
        return this.http.delete("/api/project/" + id)
        .map(response => response.json())
    }

}