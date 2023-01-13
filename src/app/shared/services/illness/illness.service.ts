import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

const { BACKEND_URL, BACKEND_TEMPORARY_AUTH_TOKEN } = environment;

const headers = {
  'Content-Type': 'application/json',
  authorization: `${BACKEND_TEMPORARY_AUTH_TOKEN}`,
};

@Injectable({
  providedIn: 'root',
})
export class IllnessService {
  constructor(private http: HttpClient) {}

  public getAllIlnesses() {
    const url = `${BACKEND_URL}/auth/illness`;
    return this.http.get(url, { headers }).pipe(
      map((response: any) => {
        const illness: Array<any> = [];
        response.data.forEach((element: any) => {
          const firstLetter = element.name.charAt(0);
          const index = illness.findIndex((item) => item.word === firstLetter);
          if (index === -1) {
            illness.push({
              word: firstLetter,
              illnesses: [element],
            });
          } else {
            illness[index].illnesses.push(element);
          }
        });
        return illness;
      })
    );
  }

  public getIllnessById(id: string) {
    if (!id) {
      return;
    }
    const url = `${BACKEND_URL}/auth/illness/${id}`;
    return this.http.get(url, { headers });
  }

  public create(illness: any) {
    const url = `${BACKEND_URL}/auth/illness`;
    return this.http.post(url, illness, { headers });
  }

  public update(illness: any) {
    const url = `${BACKEND_URL}/auth/illness/${illness._id}`;
    return this.http.patch(url, illness, { headers });
  }
}
