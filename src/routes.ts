interface pageListItem {
  label: string,
  routes: string,
}

export const pagesList: pageListItem[] = [
  {label: 'Редагування вкладок', routes: '/section-edit'},
  {label: 'Створення сторінок', routes: '/create-page'}
]