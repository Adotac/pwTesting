import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string) {
    console.log(message);
  }
 
  warn(message: string) {
    console.warn(message);
  }
 
  errorMessage(message: string) {
    console.error(message);
  }
}