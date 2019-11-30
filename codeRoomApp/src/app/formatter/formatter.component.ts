import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css']
})
export class FormatterComponent implements OnInit {

  post;
  line;
  textValue = 'public class test{public static void main( String args[] ){System.out.println("Hello world");}}';
  formatted = 'public class test {'+ '\n'+
  '    public static void main(String args[]) {'+'\n'+
  '        System.out.println("Hello world");'+'\n'+
  '    }'+'\n'+'}';

  formatText(): void {
  this.post = this.textValue.split("{");
  this.line = this.post[0];
  this.line += ' {';
  this.line +='\n';
  this.line += this.post[1];
  this.line += ' {';
  this.line +='\n';
  this.line += this.post[2];
  this.line = this.line.split("}");
  this.line = this.line[0];
  this.line +='\n';
  this.line += '}';
  this.line +='\n';
  this.line += '}';

  }
  postText(): void {
  }
  constructor() { 

  }

  ngOnInit() {
  }

}    

