import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from 'rxjs';
import { LoaderService } from './component/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private store: any = { listItems: undefined }
  public listItems = new Subject<any>();
  private url: string = 'https://api.spacexdata.com/v4/launches/query/';

  constructor(
    private http: HttpClient,
    private loader: LoaderService) {}

  getListItem(limit: number): void {
    let data = { options: { limit: limit }}
    const url = this.url;
    this.loader.setLoading(true);
    this.http.post(url, data).subscribe(
      data => {
        this.store.listItems = data as any;
        this.listItems.next(this.store.listItems);
        this.loader.setLoading(false);
      }
    )
  }
}
