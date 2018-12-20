import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {VehicleService} from './entities/vehicle/vehicle.service';
import {IVehicle, VehicleCriteria} from './entities/vehicle/vehicle.model';
import {load} from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Alten vehicles';
  vehicles: IVehicle[];
  errorMessage: string;
  vehicleCriteria: VehicleCriteria = new VehicleCriteria();
  criteria = {};

  constructor(private vehicleService: VehicleService) {
  }

  loadAll() {
    this.vehicleService.query(this.criteria).subscribe(
      (res: HttpResponse<IVehicle[]>) => {
        this.vehicles = res.body;
      },
      (res: HttpErrorResponse) => this.errorMessage = res.message);
  }

  ngOnInit() {
    this.loadAll();
  }

  searchByCriteria() {
    if (this.vehicleCriteria.connected) {
      this.criteria['connected'] = this.vehicleCriteria.connected;
    }
    if (this.vehicleCriteria.customerName) {
      this.criteria['customerName'] = this.vehicleCriteria.customerName;
    }
    this.loadAll();
  }

}
