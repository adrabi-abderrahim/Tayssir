import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '@tayssir/api-interfaces';

@Component({
  selector: 'tayssir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  requests$ = this.http.get<Request[]>('/api/requests');
  constructor(private http: HttpClient) {}
}