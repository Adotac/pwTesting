import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';

fdescribe('Montero, Joshua - pwTesting', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let logSpy: any;

  beforeEach(async () => {
    logSpy = jasmine.createSpyObj('LoggerService', ['log', 'warn']);

    await TestBed.configureTestingModule({
      declarations: [AppComponent, ],
      providers: [
        AppComponent,{
          provide: LoggerService,
          useValue: logSpy,
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('When user has input and letter checked', () => {
    beforeEach(()=>{
      component.useLetters = true;
    });
    it('should click `Generate Password`', () => {
      component.getLength("10");
      let button = fixture.debugElement.query(
        By.css('#generateBtn')
      ).nativeElement;

      button.click();
      fixture.detectChanges();
  
      expect(logSpy.log).toHaveBeenCalledWith('letter box is enabled');
      expect(logSpy.log).toHaveBeenCalledWith('generate button clicked');
    });
  });

  describe('When user has input and symbol checked', () => {
    beforeEach(()=>{
      component.useSymbols = true;
    });
    it('should click `Generate Password`', () => {
      component.getLength("10");
      let button = fixture.debugElement.query(
        By.css('#generateBtn')
      ).nativeElement;

      button.click();
      fixture.detectChanges();
  
      expect(logSpy.log).toHaveBeenCalledWith('symbols box is enabled');
      expect(logSpy.log).toHaveBeenCalledWith('generate button clicked');
    });
  });

  describe('When user has input and number checked', () => {
    beforeEach(()=>{
      component.useNumbers = true;
    });
    it('should click `Generate Password`', () => {
      component.getLength("10");
      let button = fixture.debugElement.query(
        By.css('#generateBtn')
      ).nativeElement;

      button.click();
      fixture.detectChanges();
  
      expect(logSpy.log).toHaveBeenCalledWith('numbers box is enabled');
      expect(logSpy.log).toHaveBeenCalledWith('generate button clicked');
    });
  });

  describe('When user has input and letter-number checked', () => {
    beforeEach(()=>{
      component.useNumbers = true;
      component.useLetters = true;
    });
    it('should click `Generate Password`', () => {
      component.getLength("10");
      let button = fixture.debugElement.query(
        By.css('#generateBtn')
      ).nativeElement;

      button.click();
      fixture.detectChanges();
  
      expect(logSpy.log).toHaveBeenCalledWith('numbers box is enabled');
      expect(logSpy.log).toHaveBeenCalledWith('letter box is enabled');

      expect(logSpy.log).toHaveBeenCalledWith('generate button clicked');
    });
  });

  describe('When user has input and symbols-number checked', () => {
    beforeEach(()=>{
      component.useNumbers = true;
      component.useSymbols = true;     
    });
    it('should click `Generate Password`', () => {
      component.getLength("10");
      let button = fixture.debugElement.query(
        By.css('#generateBtn')
      ).nativeElement;

      button.click();
      fixture.detectChanges();
  
      expect(logSpy.log).toHaveBeenCalledWith('numbers box is enabled');
      expect(logSpy.log).toHaveBeenCalledWith('symbols box is enabled');

      expect(logSpy.log).toHaveBeenCalledWith('generate button clicked');
    });
  });

  describe('When user has input and symbols-letter checked', () => {
    beforeEach(()=>{
      component.useLetters = true;
      component.useSymbols = true;    
    });
    it('should click `Generate Password`', () => {
      component.getLength("10");
      let button = fixture.debugElement.query(
        By.css('#generateBtn')
      ).nativeElement;

      button.click();
      fixture.detectChanges();
  
      expect(logSpy.log).toHaveBeenCalledWith('letter box is enabled');
      expect(logSpy.log).toHaveBeenCalledWith('symbols box is enabled');

      expect(logSpy.log).toHaveBeenCalledWith('generate button clicked');
    });
  });

  describe('When user has input and symbols-letter-number checked', () => {
    beforeEach(()=>{
      component.useLetters = true;
      component.useSymbols = true;
      component.useNumbers = true;
    });
    it('should click `Generate Password`', () => {
      component.getLength("10");
      let button = fixture.debugElement.query(
        By.css('#generateBtn')
      ).nativeElement;

      button.click();
      fixture.detectChanges();
  
      expect(logSpy.log).toHaveBeenCalledWith('letter box is enabled');
      expect(logSpy.log).toHaveBeenCalledWith('numbers box is enabled');
      expect(logSpy.log).toHaveBeenCalledWith('symbols box is enabled');

      expect(logSpy.log).toHaveBeenCalledWith('generate button clicked');
    });
  });

  describe('When user has input and symbols-letter-number unchecked', () => {
    beforeEach(()=>{
      component.useLetters = false;
      component.useSymbols = false;
      component.useNumbers = false;
    });
    it('should not click `Generate Password`', () => {
      component.getLength("10");
      let button = fixture.debugElement.query(
        By.css('#generateBtn')
      ).nativeElement;

      button.click();
      fixture.detectChanges();

      
      expect(logSpy.warn).toHaveBeenCalledWith('generate button is disabled');
    });
  });

  describe('When user has no input and any of symbols-letter-number checked', () => {
    beforeEach(()=>{
      component.useLetters = true;
      component.useSymbols = true;
      component.useNumbers = true;
    });
    it('should not click `Generate Password`', () => {
      let button = fixture.debugElement.query(
        By.css('#generateBtn')
      ).nativeElement;

      button.click();
      fixture.detectChanges();
      expect(logSpy.log).toHaveBeenCalledWith('letter box is enabled');
      expect(logSpy.log).toHaveBeenCalledWith('numbers box is enabled');
      expect(logSpy.log).toHaveBeenCalledWith('symbols box is enabled');
      expect(logSpy.warn).toHaveBeenCalledWith('generate button is disabled');
    });
  });

  describe('When user has no input and symbols-letter-number are unchecked', () => {
    beforeEach(()=>{
      component.useLetters = false;
      component.useSymbols = false;
      component.useNumbers = false;
    });
    it('should not click `Generate Password`', () => {
      let button = fixture.debugElement.query(
        By.css('#generateBtn')
      ).nativeElement;

      button.click();
      fixture.detectChanges();

      
      expect(logSpy.warn).toHaveBeenCalledWith('generate button is disabled');
    });
  });


//////////-----------------------------------------------/////////////

  it('should click `Use Letters` and useLetters should be true', () => {
    expect(component.useLetters).toBeFalse();

    let input = fixture.debugElement.query(
      By.css('#withLetters')
    ).nativeElement;

    input.click();
    fixture.detectChanges();

    expect(logSpy.log).toHaveBeenCalledWith('change state of useLetters');
    expect(component.useLetters).toBeTrue();
  });

  it('should click `Use Symbols` and useSymbols should be true', () => {
    expect(component.useSymbols).toBeFalse();

    let input = fixture.debugElement.query(
      By.css('#withSymbols')
    ).nativeElement;

    input.click();
    fixture.detectChanges();

    expect(logSpy.log).toHaveBeenCalledWith('change state of useSymbols');
    expect(component.useSymbols).toBeTrue();
  });

  it('should click `Use Numbers` and useNumbers should be true', () => {
    expect(component.useNumbers).toBeFalse();

    let input = fixture.debugElement.query(
      By.css('#withNumbers')
    ).nativeElement;

    input.click();
    fixture.detectChanges();

    expect(logSpy.log).toHaveBeenCalledWith('change state of useNumbers');
    expect(component.useNumbers).toBeTrue();
  });
//////////-----------------------------------------------/////////////
  it('should check password string length and input has a number', () => {
    component.getLength("10");
    expect(logSpy.log).toHaveBeenCalledWith('Input is a number');
  });

  it('should check password string length and input does not have a number', () => {
    component.getLength("gwapoko");
    expect(logSpy.warn).toHaveBeenCalledWith('Input is not a number');
  });

});
