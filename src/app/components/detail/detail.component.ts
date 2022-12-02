import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ListService } from '../../services/list.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-detail',
  styleUrls: ['./detail.component.scss'],
  templateUrl: './detail.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
  constructor(
    private _listService: ListService,
    private _activatedRoute: ActivatedRoute
  ) {}

  params$: Observable<{ id: any }> = this._activatedRoute.params.pipe(
    map((params) => ({ id: params['id'] }))
  );
  product$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap((params) => this._listService.getOne(params['id']))
  );
}
