import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {


  constructor() {
  }

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
}
