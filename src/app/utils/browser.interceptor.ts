import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BrowserInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userBrowser = this.getBrowserVersion();
    const userOs = this.getOs();

    const modifiedReq = req.clone({
      headers: req.headers.set('x-user-browser', userBrowser).set('x-user-os', userOs),
    });

    return next.handle(modifiedReq);
  }

  getBrowserVersion() {

    const userAgent = navigator.userAgent;
    let tem;
    let matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(matchTest[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
      return 'IE ' + (tem[1] || '');
    }

    if (matchTest[1] === 'Chrome') {
      tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) {
        return tem.slice(1).join(' ').replace('OPR', 'Opera');
      }
    }

    matchTest = matchTest[2] ? [matchTest[1], matchTest[2]] : [navigator.appName, navigator.appVersion, '-?'];
    tem = userAgent.match(/version\/(\d+)/i);
    if ( tem != null) {
      matchTest.splice(1, 1, tem[1]);
    }

    return matchTest.join(' ');
  }

  getOs() {
    if (navigator.appVersion.indexOf('Win') !== -1) {
        return 'Windows OS';
    } else if (navigator.appVersion.indexOf('Mac') !== -1) {
        return 'MacOS';
    } else if (navigator.appVersion.indexOf('X11') !== -1) {
        return 'UNIX OS';
    } else if (navigator.appVersion.indexOf('Linux') !== -1) {
        return 'Linux OS';
    }
  }
}
