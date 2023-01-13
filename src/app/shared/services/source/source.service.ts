import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';	
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
const headers = {
  'Content-Type': 'application/json',
  authorization: `${environment.BACKEND_TEMPORARY_AUTH_TOKEN}`,
};
export class SourceService {

  constructor(
    private http: HttpClient,
    ) { }


  public getAllSources() {
  }

  public create(source: any) {
  const url = `${environment.BACKEND_URL}/auth/source/${source?._id}`;
  return this.http.post(url, source, { headers });
  }

}
