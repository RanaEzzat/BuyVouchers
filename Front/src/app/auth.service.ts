import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { environment } from "../environments/environment";
//import { map } from "rxjs/operators";
import "rxjs/add/operator/map";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public token: string;
  public authorized: boolean;
  constructor(private http: Http, private alertController: AlertController) {
    if (this.token) {
      this.authorized = true;
    } else {
      this.authorized = false;
    }
  }

  showAlert(msg) {
    const alert = this.alertController.create({
      message: msg,
      header: "Error",
      buttons: ["OK"]
    });
    // tslint:disable-next-line:no-shadowed-variable
    alert.then(alert => alert.present());
  }

  setToken(token: string) {
    window.localStorage.setItem("token", token);
    console.log(token);
    this.token = window.localStorage.getItem("token");
    console.log(this.token);
    this.authorized = true;
  }
  getAuthorizationToken() {
    return localStorage.getItem("token");
  }

  logout() {
    this.authorized = false;
    this.token = null;
    window.localStorage.setItem("token", null);
    window.localStorage.removeItem("token");
  }
  signOut() {
    // return this.http.get(environment.apiUrl + "/logout");
  }

  public LogIn(UserOb) {
    return this.http
      .post(environment.apiUrl + "/auth/login", UserOb)
      .map(res => res.json());
  }
  getPoints() {
    var headers = new Headers();
    headers.append("Authorization", "Bearer " + this.getAuthorizationToken());
    headers.append("Content-Type", "application/json");
    return this.http
      .get(environment.apiUrl + "/user/getCurrentPoints", {
        headers
      })
      .map(res => res.json());
  }

  updateInfo(UserOb) {
    // var headers = new Headers();
    // headers.append("content-type", "application/json");
    // console.log("userob", UserOb);
    // return this.http.post(environment.apiUrl + "/updateinfo", UserOb);
  }
  public addReg(UserOb) {
    var headers = new Headers();
    headers.append("content-type", "application/json");
    console.log("userob", UserOb);
    return this.http.post(environment.apiUrl + "/auth/register", UserOb);
  }

  public postUserVoucher(UserOb) {
    var headers = new Headers();
    
    headers.append("Authorization", "Bearer " + this.getAuthorizationToken());
   //  headers.append('Access-Control-Allow-Origin', '*');
   // headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
   // headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    headers.append("Content-Type", "application/json");
  
    return this.http
      .put(environment.apiUrl + "/user/postUserVoucher", {
        headers
      }, UserOb)
      .map(res => res.json());
}}
