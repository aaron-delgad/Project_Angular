import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CoreService {
  private _isDesktop = false;
  private _isTablet = false;
  private _isMobile = false;

  private _navigation = '';

  constructor() {
  }

  get isDesktop(): boolean {
    return this._isDesktop;
  }

  set isDesktop(value: boolean) {
    this._isDesktop = value;
  }

  get isTablet(): boolean {
    return this._isTablet;
  }

  set isTablet(value: boolean) {
    this._isTablet = value;
  }

  get isMobile(): boolean {
    return this._isMobile;
  }

  set isMobile(value: boolean) {
    this._isMobile = value;
  }

  get nonMobile(): boolean {
    return this._isTablet || this._isDesktop;
  }

  get nonDesktop(): boolean {
    return this._isMobile || this._isTablet;
  }

  get navigation(): string {
    return this._navigation;
  }

  set navigation(value: string) {
    this._navigation = value;
  }
}
