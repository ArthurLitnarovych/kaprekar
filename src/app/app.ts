import { Component, signal } from '@angular/core';
import { kaprekar } from './utilities/kaprekar';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgxTypewriterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('kaprekar');
  protected value = signal<string>('');
  protected kaprekarResult = signal<string>('');
  showError = false;

  onBlur() {
    const val = this.value()?.toString() || '';
    this.showError = val.length > 0 && val.length !== 4;
  }

  public calculateKaprekar(num: number) {
    this.kaprekarResult.set('');
    setTimeout(() => this.kaprekarResult.set(kaprekar(num)), 50);
  }
}
