interface PageListItem {
  label: string;
  routes: string;
}

export enum RoutesEnum {
  SectionEdit = "/section-edit",
  PageCreate = "/create-page",
  Users = "/users",
  Auth = "/auth",
}

export const pagesList: PageListItem[] = [
  { label: "Редагування вкладок", routes: RoutesEnum.SectionEdit },
  { label: "Створення сторінок", routes: RoutesEnum.PageCreate },
  { label: "Користувачі", routes: RoutesEnum.Users },
];
