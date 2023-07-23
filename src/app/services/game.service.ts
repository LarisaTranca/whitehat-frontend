import { Injectable } from '@angular/core';
import { GameModel } from '@app/models/game.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UrlUtilsService } from './url-utils.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(
    private _http: HttpClient,
    private _urlUtilsService: UrlUtilsService
  ) {}

  getGames(payload: any) {
    return this.fetchGames(payload).pipe(
      map((res: any) => res?.data),
      map((gameData: any) => {
        return {
          total: gameData?.total,
          games: gameData?.data.map((game: GameModel) => game),
        };
      }),
      catchError((error, caught) => {
        throw new Error(error);
      })
    );
  }

  fetchGames(payload: any) {
    return this._http.get(
      environment.apiURL + this._urlUtilsService.payloadToQueryParams(payload)
    );
  }
}
