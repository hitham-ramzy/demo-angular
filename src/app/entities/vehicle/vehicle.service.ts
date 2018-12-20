import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {createRequestOption} from '../../utils/request-util';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {IVehicle} from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private resourceUrl = 'http://localhost:8080/api/vehicles';

  constructor(private http: HttpClient) {
  }

  query(req?: any): Observable<HttpResponse<IVehicle[]>> {
    const options = createRequestOption(req);
    return this.http.get<IVehicle[]>(`${this.resourceUrl}`, {
      params: options, observe: 'response'
    });
  }
}
