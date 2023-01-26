import { HttpHeaders } from "@angular/common/http";

export class ConstSettings{

   static readonly apiHost: string = 'http://localhost:8081/';
   static readonly standardHeader: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
 }