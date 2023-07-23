import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlUtilsService {
  constructor(private _router: Router, private _serializer: UrlSerializer) {}

  payloadToQueryParams(payload: object) {
    const tree = this._router.createUrlTree([], { queryParams: payload });
    return this._serializer.serialize(tree);
  }
}
