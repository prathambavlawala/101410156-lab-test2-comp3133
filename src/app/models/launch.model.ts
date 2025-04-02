export interface Launch {
mission_id: any;
    launch_success: any;
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string;
    rocket: {
      first_stage: any;
      rocket_name: string;
      rocket_type: string;
    };
    links: {
      mission_patch_small: string;
      article_link: string;
      wikipedia: string;
      video_link: string;
    };
  }