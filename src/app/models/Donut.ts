export type Donut = {
    id: number;
    ref: string;
    name: string;
    photo: string;
    photo_attribution: string;
    calories?: number,
    extras?: string[],
};

export type DonutsApiResponse = {
    count: number;
    results: Donut[];
}