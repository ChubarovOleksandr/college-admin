export interface tabInterface {
  tabName: string;
  url: string;
}

export interface sectionInterface {
  name: string;
  tabs: tabInterface[];
  url: string;
}
