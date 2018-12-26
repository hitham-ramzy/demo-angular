import {Injectable, InjectionToken} from '@angular/core';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export function ConfigFactory(configService: ConfigService, file: string, property: string) {
  return configService.loadJson(file)[property];
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }

  loadJson(filePath) {
    const json = this.loadFile(filePath, 'application/json');
    return JSON.parse(json);
  }

  private loadFile(filePath: any, mimeType: string) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', filePath, false);
    if (mimeType != null) {
      xmlHttp.overrideMimeType(mimeType);
    }
    xmlHttp.send();
    if (xmlHttp.status === 200) {
      return xmlHttp.responseText;
    }
    return null;
  }
}
