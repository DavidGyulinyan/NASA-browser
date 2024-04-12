export interface Asteroid {
    id: string;
    name: string;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: {
        miss_distance: { kilometers: number };
    }[];
    absolute_magnitude_h: number;
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        };
    };
}

export interface NearEarthObjects {
    [key: string]: Asteroid[];
}
