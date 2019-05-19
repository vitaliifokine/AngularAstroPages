import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  carName: string = "Ford";
  year=2000;
  
  getName(){
    return this.carName;
  }
  
  canAddCar: boolean=false;
  addStatus: boolean=false;
  inputText:string="";
  
  @Input('astro')
  astro: any;
  
  @Input('astroDescription')
  astroDescription: any;
  
  
  addStatusInfo(){
    this.addStatus=true;
  }
  
  onKeyUp(event){
    this.inputText=event.target.value;
  }
  
  constructor(){
    setTimeout(()=>{this.canAddCar=true}, 4000);
  }
  
  ngOnInit(){
    astrol: this.astro;
    description: this.astroDescription;
  }
  }