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
  textValue = 'public class test  {public String myTest;public static void main( String args[] ) {System.out.println("Hello world");System.out.println("Second line");}public void setTest( String test )  {myTest = test;}public String getTest( )  {return myTest;}}';

  formatText(textValue): void {
  this.code = ''; // reset code
  this.spaceTriggred = 0; 
  this.line = textValue.split("{"); // first we break up by opening brackets

  var lengthOfLine = this.line.length;
  // Format Rules:
  //1. Break lines on {
  for(let i = 0; i < lengthOfLine; i ++){

    // this makes sure we add back in the { unless we are at the last line
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

  //2. Break lines on }
  for(let i = 0; i < lengthOfLine; i ++){
    // this makes sure we add back in the } unless we are at the last line
    if(i < lengthOfLine-1){
      this.code += this.line[i]+ '}'+ '\n';
      }else{
    this.code += this.line[i] + '\n';
  }
  }

  //3. Break lines on ;
  this.line = this.code.split(";");
  lengthOfLine = this.line.length;
  if(lengthOfLine > 0){
  this.code = '';
  for(let i = 0; i < lengthOfLine; i ++){
    if(i < lengthOfLine-1){
    this.code += this.line[i]+ ';' +'\n'; }else{
    this.code += this.line[i];
    }
  }
}

//4. indent all public methods by 5 spaces
this.line = this.code.split("public");
lengthOfLine = this.line.length;
this.code = '';

for(let i = 0; i < lengthOfLine; i ++){
  if(i>1){
  this.code += '     public '+this.line[i] +'\n'; 
}else if(i>0){
  this.code += 'public '+this.line[i] +'\n'; 
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

