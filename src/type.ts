export interface BannerItem {
  type: "BANNER";
  id: number;
  imageUrl: string;
  linkUrl: string;
}

export interface RecentlyViewedItem {
  type: "RECENTLY_VIEWED";
  id: number;
  imageUrl: string;
  linkUrl: string;
  title: string;
  price: number;
}

export interface AdItem {
  type: "AD";
  key: string;
}
