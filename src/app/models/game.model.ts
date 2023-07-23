import { ProviderModel } from './provider.model';

export class GameModel {
    id:           number;
    launchcode:   string;
    rtp:          number;
    category:     string;
    hot:          boolean;
    new:          boolean;
    image:        string;
    name:         string;
    provider:     ProviderModel;

    constructor(options: {
        id:           number,
        launchcode:   string,
        rtp:          number,
        category:     string,
        hot:          boolean,
        new:          boolean,
        image:        string,
        name:         string,
        provider:     ProviderModel
    }) {
        this.id         = options.id;
        this.launchcode = options.launchcode;
        this.rtp        = options.rtp;
        this.category   = options.category;
        this.hot        = options.hot;
        this.new        = options.new;
        this.image      = options.image;
        this.name       = options.name;
        this.provider   = options.provider;
    }
}