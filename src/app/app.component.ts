import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    

})
export class AppComponent { 
    name= '';
    count: number=0;
    increase() : void {
        this.count++;
    }
    reset(): void{
      this.count =0
    };

    
}
