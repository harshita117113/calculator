import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  input:any="";
  result:any="";

  pressNum(num: string) {
    let lastKey=this.input.length-1;
    if(num=='.'){
      let val='';
      let f:boolean=false;
      while(this.input[lastKey]>='0' && this.input[lastKey]<='9' || this.input[lastKey]=='.'){
        if(this.input[lastKey]=='.')
        {
          f=true;
          break;
        }
        if(this.input[lastKey]==='/' || this.input[lastKey]==='*' || this.input[lastKey]==='+' || this.input[lastKey]==='-')
        {
          break;
        }
        lastKey--;
      }
      if(f==true)
      {
        return;
      }
    }
    if(num=='0'){
      if(this.input=='')
      {
        return;
      }
      lastKey= this.input.length-1;
      if(this.input[lastKey]==='/' || this.input[lastKey]==='*' || this.input[lastKey]==='+' || this.input[lastKey]==='-')
      {
        return;
      }
    }
    this.input = this.input + num;
    this.calcAnswer();
  }

  calcAnswer(){
    var formula = this.input;
    var lastKey= formula.length-1;
    if(formula[lastKey]==='.' || formula[lastKey]==='/' || formula[lastKey]==='*' || formula[lastKey]==='+' || formula[lastKey]==='-')
    {
      formula=formula.substr(0,formula.length-1);
    }
    this.result=eval(formula);
  }
  pressOperator(num: string) {
    var lastKey= this.input.length-1;
    if(num==='%')
    {
      if(this.input[lastKey]==='/' || this.input[lastKey]==='*' || this.input[lastKey]==='+' || this.input[lastKey]==='-'){
        return;
      }
      let val='';
      while(this.input[lastKey]>='0' && this.input[lastKey]<='9' || this.input[lastKey]=='.'){
        //val=val*10+this.input[lastKey];
        val=this.input[lastKey]+val;
        this.input= this.input.substr(0,this.input.length-1);
        lastKey--;
      }
      let x,y;
      if(this.input[lastKey]=='+' || this.input[lastKey]=='-')
      {
        x = eval(this.input.substr(0,this.input.length-1));
        y = (parseFloat(val)/100) * x;
      }
      else{
        y = parseFloat(val)/100;
      }
      this.input=this.input +y;
      this.calcAnswer();
  }

  else{
    var lastKey= this.input.length-1;
    if(this.input[lastKey]==='/' || this.input[lastKey]==='*' || this.input[lastKey]==='+' || this.input[lastKey]==='-')
    {
      this.input=this.input.substr(0,this.input.length-1);
    }
      this.input=this.input+num;
  }
  }

  getAnswer() {
    var lastKey= this.input.length-1;
    if(this.input[lastKey]==='/' || this.input[lastKey]==='*' || this.input[lastKey]==='+' || this.input[lastKey]==='-')
    {
      this.input=this.input.substr(0,this.input.length-1);
    }
    this.calcAnswer();
    this.input=this.result;
  }

  clear() {
    this.input=this.input.substr(0,this.input.length-1);
    this.calcAnswer();
  }

  allClear() {
    this.input='';
    this.result='';
  }
}
