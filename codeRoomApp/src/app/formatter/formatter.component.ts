import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css']
})
export class FormatterComponent implements OnInit {


  textValue = 'public class test{public static void main( String args[] ){System.out.println("Hello world");}}';
  formatted = 'public class test {'+ '\n'+
  '    public static void main(String args[]) {'+'\n'+
  '        System.out.println("Hello world");'+'\n'+
  '    }'+'\n'+'}';

  formatText(): void {
    this.textValue = this.formatted;
  }
  constructor() { 

  }

  ngOnInit() {
  }

}    

