export enum HTTP_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export interface Games {
  count?: number;
  next?: string;
  previous?: null;
  results?: Result[];
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  seo_h1?: string;
  noindex?: boolean;
  nofollow?: boolean;
  description?: string;
  filters?: Filters;
  nofollow_collections?: string[];
}

export interface Filters {
  years?: FiltersYear[];
}

export interface FiltersYear {
  from?: number;
  to?: number;
  filter?: string;
  decade?: number;
  years?: YearYear[];
  nofollow?: boolean;
  count?: number;
}

export interface YearYear {
  year?: number;
  count?: number;
  nofollow?: boolean;
}

export interface Result {
  id?: number;
  slug?: string;
  name?: string;
  released?: Date;
  tba?: boolean;
  background_image?: string;
  rating?: number;
  rating_top?: number;
  ratings?: Rating[];
  ratings_count?: number;
  reviews_text_count?: number;
  added?: number;
  added_by_status?: AddedByStatus;
  metacritic?: number;
  playtime?: number;
  suggestions_count?: number;
  user_game?: null;
  reviews_count?: number;
  saturated_color?: Color;
  dominant_color?: Color;
  platforms?: PlatformElement[];
  parent_platforms?: ParentPlatform[];
  genres?: Genre[];
  stores?: Store[];
  clip?: Clip;
  tags?: Genre[];
  short_screenshots?: ShortScreenshot[];
}

export interface AddedByStatus {
  yet?: number;
  owned?: number;
  beaten?: number;
  toplay?: number;
  dropped?: number;
  playing?: number;
}

export interface Clip {
  clip?: string;
  clips?: Clips;
  video?: string;
  preview?: string;
}

export interface Clips {
  "320"?: string;
  "640"?: string;
  full?: string;
}

export enum Color {
  The0F0F0F = "0f0f0f",
}

export interface Genre {
  id?: number;
  name?: string;
  slug?: string;
  games_count?: number;
  image_background?: string;
  domain?: Domain;
  language?: Language;
}

export enum Domain {
  AppsAppleCOM = "apps.apple.com",
  EpicgamesCOM = "epicgames.com",
  GogCOM = "gog.com",
  MarketplaceXboxCOM = "marketplace.xbox.com",
  MicrosoftCOM = "microsoft.com",
  NintendoCOM = "nintendo.com",
  PlayGoogleCOM = "play.google.com",
  StorePlaystationCOM = "store.playstation.com",
  StoreSteampoweredCOM = "store.steampowered.com",
}

export enum Language {
  Eng = "eng",
}

export interface ParentPlatform {
  platform?: ParentPlatformPlatform;
}

export interface ParentPlatformPlatform {
  id?: number;
  name?: Name;
  slug?: Slug;
}

export enum Name {
  Android = "Android",
  AppleMacintosh = "Apple Macintosh",
  IOS = "iOS",
  Linux = "Linux",
  Nintendo = "Nintendo",
  PC = "PC",
  PlayStation = "PlayStation",
  Xbox = "Xbox",
}

export enum Slug {
  Android = "android",
  Ios = "ios",
  Linux = "linux",
  MAC = "mac",
  Nintendo = "nintendo",
  PC = "pc",
  Playstation = "playstation",
  Xbox = "xbox",
}

export interface PlatformElement {
  platform?: PlatformPlatform;
  released_at?: Date;
  requirements_en?: Requirements | null;
  requirements_ru?: Requirements | null;
}

export interface PlatformPlatform {
  id?: number;
  name?: string;
  slug?: string;
  image?: null;
  year_end?: null;
  year_start?: number | null;
  games_count?: number;
  image_background?: string;
}

export interface Requirements {
  minimum?: string;
  recommended?: string;
}

export interface Rating {
  id?: number;
  title?: Title;
  count?: number;
  percent?: number;
}

export enum Title {
  Exceptional = "exceptional",
  Meh = "meh",
  Recommended = "recommended",
  Skip = "skip",
}

export interface ShortScreenshot {
  id?: number;
  image?: string;
}

export interface Store {
  id?: number;
  store?: Genre;
  url_en?: string;
  url_ru?: null | string;
}

export interface Game {
  id?: number;
  slug?: string;
  name?: string;
  name_original?: string;
  description?: string;
  metacritic?: null;
  metacritic_platforms?: any[];
  released?: Date;
  tba?: boolean;
  updated?: Date;
  background_image?: string;
  background_image_additional?: null;
  website?: string;
  rating?: number;
  rating_top?: number;
  ratings?: any[];
  reactions?: null;
  added?: number;
  added_by_status?: AddedByStatus;
  playtime?: number;
  screenshots_count?: number;
  movies_count?: number;
  creators_count?: number;
  achievements_count?: number;
  parent_achievements_count?: number;
  reddit_url?: string;
  reddit_name?: string;
  reddit_description?: string;
  reddit_logo?: string;
  reddit_count?: number;
  twitch_count?: number;
  youtube_count?: number;
  reviews_text_count?: number;
  ratings_count?: number;
  suggestions_count?: number;
  alternative_names?: any[];
  metacritic_url?: string;
  parents_count?: number;
  additions_count?: number;
  game_series_count?: number;
  user_game?: null;
  reviews_count?: number;
  community_rating?: number;
  saturated_color?: string;
  dominant_color?: string;
  parent_platforms?: ParentPlatform[];
  platforms?: PlatformElement[];
  stores?: Store[];
  developers?: Developer[];
  genres?: any[];
  tags?: any[];
  publishers?: any[];
  esrb_rating?: null;
  clip?: null;
  description_raw?: string;
}

export interface AddedByStatus {
  toplay?: number;
}

export interface Developer {
  id?: number;
  name?: string;
  slug?: string;
  games_count?: number;
  image_background?: string;
  domain?: string;
}

export interface ParentPlatform {
  platform?: ParentPlatformPlatform;
}

export interface PlatformElement {
  platform?: PlatformPlatform;
  released_at?: Date;
  requirements?: null;
}
