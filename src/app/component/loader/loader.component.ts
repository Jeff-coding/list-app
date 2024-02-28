import { Component, Input } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  public loading: boolean;

  constructor(private service: LoaderService) {
    this.service.loadingStatus.subscribe((status: any) => this.loading = status);
  }
}
