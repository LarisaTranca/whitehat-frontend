import { Component, OnInit } from '@angular/core';
import { GameService } from '@app/services/game.service';
import { GameModel } from '@app/models/game.model';
import { Constants } from '@app/common/constants';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  games: GameModel[] = [];
  gamesLength: number = 0;
  showPreloader: boolean = false;
  categories: Array<{ value: string; name: string }> = Constants.gameCategories;
  selectedCategory: string = '0';
  pageSize: number = 10;
  pageIndex: number = 1;
  //Hardcoded for moment. In a real world environment will get country from client IP
  gamesPayload: object = { brandid: 104, country: 'DE' };

  constructor(
    private _gameService: GameService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  async initData() {
    this._activatedRoute.queryParams.subscribe((params) => {
      this.selectedCategory = params.category ?? this.selectedCategory;
      this.pageIndex = params.page ?? this.pageIndex;
      this.pageSize = params.perpage ?? this.pageSize;

      this.getListOfGames({ ...this.gamesPayload, ...params });
    });
  }

  getListOfGames(payload: object): void {
    this.showPreloader = true;
    this.games = [];

    try {
      this._gameService.getGames(payload).subscribe(
        (response: any) => {
          this.games = response?.games;
          this.gamesLength = response?.total;
          this.showPreloader = false;
        },
        (error: any) => {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  onCategoryChange(event: Event, category: any): void {
    this._router.navigate(['/games'], {
      queryParams: { category: category },
      queryParamsHandling: 'merge',
    });
  }

  onPageChanged(event: any): void {
    this._router.navigate(['/games'], {
      queryParams: { perpage: event.pageSize, page: event.pageIndex },
      queryParamsHandling: 'merge',
    });
  }

  showLaunchCode(game: GameModel): void {
    alert('Launch code is: ' + game.launchcode);
  }
}
