import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'any'
})
export class ConfigurationService {

  constructor(@Inject(DOCUMENT) private document) { }

  setCss(element, attribute, value): void {
    this.document.querySelectorAll('button').forEach(el => el.style[attribute] = value);
    this.document.querySelector(element).style[attribute] = value;
  }
}
