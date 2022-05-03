import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(@Inject(DOCUMENT) private document) { }

  // tslint:disable-next-line:typedef
  getFontConfigurationExtraSmall() {
    return {'text-extra-small': true, 'text-small': false, 'text-medium': false, 'text-large': false, 'text-extra-large': false};
  }
  // tslint:disable-next-line:typedef
  getFontConfigurationSmall() {
    return {'text-extra-small': false, 'text-small': true, 'text-medium': false, 'text-large': false, 'text-extra-large': false};
  }
  // tslint:disable-next-line:typedef
  getFontConfigurationMedium() {
    return {'text-extra-small': false, 'text-small': false, 'text-medium': true, 'text-large': false, 'text-extra-large': false};
  }
  // tslint:disable-next-line:typedef
  getFontConfigurationLarge() {
    return {'text-extra-small': false, 'text-small': false, 'text-medium': false, 'text-large': true, 'text-extra-large': false};
  }
  // tslint:disable-next-line:typedef
  getFontConfigurationExtraLarge() {
    return {'text-extra-small': false, 'text-small': false, 'text-medium': false, 'text-large': false, 'text-extra-large': true};
  }

  setCss(element, attribute, value) {
    this.document.querySelector(element).style[attribute] = value;
  }
}
