import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loadingStatus = new Subject<boolean>();

  setLoading(status: boolean) {
    this.loadingStatus.next(status);
  }
}
