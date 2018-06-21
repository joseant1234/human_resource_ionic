import { Injectable, NgModule} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpHeaders} from '@angular/common/http';

import { JwtProvider } from '../providers/auth/jwt';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private jwtProvider : JwtProvider){}

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    let hash_header = {};
    hash_header['Content-Type'] = 'application/json';
    if(this.jwtProvider.getJwt()) hash_header['Authorization'] = 'Bearer ' + this.jwtProvider.getJwt()

    const headers = new HttpHeaders(hash_header);
    const newReq = req.clone({headers});

    return next.handle(newReq);
  }

}
