export class ProviderModel {
    id:           number;
    name:         string;

    constructor(options: {
        id:           number,
        name:         string
    }) {
        this.id         = options.id;
        this.name       = options.name;
    }
}