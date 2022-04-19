import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { serverUrl } from "src/configs/server.config";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})

export class SessionLoginService {

    LOGIN_URL = serverUrl + '/login/'
    LOGOUT_URL = serverUrl + '/logout/'




    constructor(private httpClient : HttpClient){
        
    }

    login(pUsername,pPassword){
        const LoginData = {
            username: pUsername,
            password : pPassword
        }

        return new Observable<boolean>((observer) =>{
            this.httpClient.post(environment.baseUrl + this.LOGIN_URL,LoginData).subscribe(result => {
                observer.next(true);
                observer.complete();
            }, error => {
                observer.error(false);
                observer.complete();
            });
        });
    }

    logout(){
        return new Observable<boolean>(observer => {
            this.httpClient.get(environment.baseUrl + this.LOGOUT_URL).subscribe( result => {
                observer.next(true);
                observer.complete();
            },error => {
                observer.error(false);
                observer.complete();
            });
        });
    }
    //https://www.youtube.com/watch?v=qfFujazLWLc&ab_channel=SimpleTech 13:41
}