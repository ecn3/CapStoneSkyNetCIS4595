import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css']
})
export class FormatterComponent implements OnInit {

  post;
  line;
  code;
  textValue = 'public class test{public static void main( String args[] ){System.out.println("Hello world");}}';
  formatted = 'public class test {'+ '\n'+
  '    public static void main(String args[]) {'+'\n'+
  '        System.out.println("Hello world");'+'\n'+
  '    }'+'\n'+'}';

  formatText(): void {


  this.line = this.textValue.split("{");

  var lengthOfLine = this.line.length;

  for(let i = 0; i < lengthOfLine; i ++){
    if(i > 0){
    this.code += "     "+this.line[i] + '\n';
    }else {
    this.code += this.line[0] + '\n';
    }
  }
}
  postText(): void {
  }
  constructor() { 

  }

  ngOnInit() {
  }

}    

