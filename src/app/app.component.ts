import { Component, OnInit, Output } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private logger: LoggerService){}

  title = 'Password Generator';
  password = '';
  name = 'Montero';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  pwLength = 0;


  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.useLetters) {
      validChars += letters;
      this.logger.log("letter box is enabled");
    }

    if (this.useNumbers) {
      validChars += numbers;
      this.logger.log("numbers box is enabled");
    }

    if (this.useSymbols) {
      validChars += symbols;
      this.logger.log("symbols box is enabled");
    }

    
    let generatedPassword = '';
    for (let i = 0; i < this.pwLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
    if (!(this.useLetters || this.useNumbers || this.useSymbols) 
          || this.pwLength == 0)
      this.logger.warn("generate button is disabled");
    else
      this.logger.log("generate button clicked");
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
    this.logger.log("change state of useLetters");
  }
  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
    this.logger.log("change state of useSymbols");
  }
  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
    this.logger.log("change state of useNumbers");
  }

  getLength(event: string) {
    const parsedLength = parseInt(event);
    if (!isNaN(parsedLength)) {
      this.pwLength = parsedLength;
      this.logger.log("Input is a number");
    }
    else{
      this.logger.warn("Input is not a number");
    }
  }
}
