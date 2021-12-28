import { Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `
   <div [class.ispinkbox]="isPink" ></div>
    <div [class.ispinkbox]="!isPink"></div>
    <input type="checkbox" [(ngModel)]="isPink" /> `,
    styles: [`
div {width:50px; height:50px; border:1px solid #ccc}
 .ispinkbox{background-color:pink;}
`]
})
export class ChildComponent {
    isPink = false;
}