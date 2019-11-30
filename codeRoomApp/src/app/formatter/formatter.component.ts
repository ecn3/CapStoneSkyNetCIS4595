import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css']
})
export class FormatterComponent implements OnInit {

  post = "";
  line;
  code = "";
  spaceTriggred = 0;
  textValue = 'public class test {public static void main( String args[] ){System.out.println("Hello world");System.out.println("Hello world");}}';

  formatText(textValue): void {
  this.code = '';
  this.spaceTriggred = 0;
  this.line = textValue.split("{");

  var lengthOfLine = this.line.length;

  for(let i = 0; i < lengthOfLine; i ++){

    for(let j = 0; j < this.spaceTriggred; j ++){
    this.code += '     ';
    }
    this.spaceTriggred++;
 
    if(i < lengthOfLine-1){
    this.code += this.line[i] + ' {' + '\n';
    }else {
    this.code += this.line[i] + '\n';
    }
  }

  this.line = this.code.split("}");
  this.spaceTriggred = 0;
  lengthOfLine = this.line.length;
  this.code = '';

  for(let i = 0; i < lengthOfLine; i ++){
    for(let j = 0; j < this.spaceTriggred; j ++){
      this.code += '     ';
      }
      this.spaceTriggred++;
    if(i < lengthOfLine-1){
      this.code += this.line[i] + '\n'+ '}';
      }else{
    this.code += this.line[i] + '\n';
  }
  }

  
  this.line = this.code.split(";");
  lengthOfLine = this.line.length;
  if(lengthOfLine > 0){
  this.code = '';
  for(let i = 0; i < lengthOfLine; i ++){
    if(i < lengthOfLine-1){
    this.code += this.line[i]+ ';' +'\n'; }else{
    this.code += this.line[i] + '\n';
    }
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

