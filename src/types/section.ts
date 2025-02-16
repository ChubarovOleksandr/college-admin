export interface TabInterface {
  tabName: string;
  tabUrl: string;
}

export interface SectionInterface {
  headerName: string;
  tabs: TabInterface[];
  headerUrl: string;
}
