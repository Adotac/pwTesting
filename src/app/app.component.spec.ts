import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

fdescribe('Montero, Joshua - pwTesting', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should click `Use Letters` and useLetters should be true', () => {
    expect(component.useLetters).toBeFalse();

    let input = fixture.debugElement.query(
      By.css('#withLetters')
    ).nativeElement;

    input.click();
    fixture.detectChanges();

    expect(component.useLetters).toBeTrue();
  });

  it('should click `Use Symbols` and useSymbols should be true', () => {
    expect(component.useSymbols).toBeFalse();

    let input = fixture.debugElement.query(
      By.css('#withSymbols')
    ).nativeElement;

    input.click();
    fixture.detectChanges();

    expect(component.useSymbols).toBeTrue();
  });

  it('should click `Use Numbers` and useNumbers should be true', () => {
    expect(component.useNumbers).toBeFalse();

    let input = fixture.debugElement.query(
      By.css('#withNumbers')
    ).nativeElement;

    input.click();
    fixture.detectChanges();

    expect(component.useNumbers).toBeTrue();
  });

});
