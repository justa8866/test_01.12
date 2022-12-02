import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ListModel } from '../../models/list.model';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  readonly list$: Observable<ListModel[]> = this._listService.getAll();

  constructor(private _listService: ListService) {}
}
