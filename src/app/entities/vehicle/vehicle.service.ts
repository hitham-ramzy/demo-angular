import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {createRequestOption} from '../../utils/request-util';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {IVehicle} from './vehicle.model';
import {API_BASE_URL} from '../../service/config.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private resourceUrl = '';

  constructor(private http: HttpClient, @Inject(API_BASE_URL) resourceUrl: string) {
    this.resourceUrl = resourceUrl;
  }

  query(req?: any): Observable<HttpResponse<IVehicle[]>> {
    const options = createRequestOption(req);
    return this.http.get<IVehicle[]>(`${this.resourceUrl}` + `/alten-resources/api/vehicles` , {
      params: options, observe: 'response'
    });
  }
}
