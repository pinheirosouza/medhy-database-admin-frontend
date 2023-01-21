import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

const { BACKEND_URL, BACKEND_TEMPORARY_AUTH_TOKEN } = environment;

const headers = {
  'Content-Type': 'application/json',
  authorization: `${BACKEND_TEMPORARY_AUTH_TOKEN}`,
  'Access-Control-Allow-Origin': '*',
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
    let illnessData = {
      illnessName: illness.name,
      a3code: illness.cid,
      code: illness.code,
    };

    return this.http.post(url, illnessData, { headers });
  }

  public updateSignsSymptoms(illness: any) {
    const url = `${BACKEND_URL}/auth/illness/signals-symtom/`;

    return this.http.put(url, illness, { headers });
  }

  public updateMedicationsExams(illness: any) {
    const url = `${BACKEND_URL}/auth/illness/medications-exams/`;

    return this.http.put(url, illness, { headers });
  
  }
}
