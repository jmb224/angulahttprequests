import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Sending a ${req.method} request`)

    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz')
    })

    return next.handle(modifiedRequest)
    // return next.handle(req)
    // throw new Error("Method not implemented.");
  }

}
