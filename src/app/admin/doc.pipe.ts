import { Pipe, PipeTransform } from '@angular/core';
import { AdminService } from './admin.service';
import { Observable } from 'rxjs/Observable';

@Pipe({
  name: 'doc'
})

export class DocPipe implements PipeTransform {

  constructor(private db: AdminService) { }
  transform(value: any): Observable<any> {
    return this.db.doc(value.path)
  }

}
