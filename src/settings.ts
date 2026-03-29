export type FileColorPluginSettings = {
  cascadeColors: boolean
  cascadeToFiles: boolean
  colorBackground: boolean
  palette: Array<{
    id: string
    name: string
    value: string
  }>
  fileColors: Array<{
    path: string
    color: string
  }>
  favorites: Array<{
    id: string
    value: string
  }>
  recentColors: Array<{
    id: string
    value: string
  }>
}

export const BASIC_COLORS = [
  { id: 'basic-red', name: 'Red', value: '#e05252' },
  { id: 'basic-orange', name: 'Orange', value: '#e08c52' },
  { id: 'basic-yellow', name: 'Yellow', value: '#e0d152' },
  { id: 'basic-green', name: 'Green', value: '#52b052' },
  { id: 'basic-blue', name: 'Blue', value: '#528be0' },
  { id: 'basic-purple', name: 'Purple', value: '#9b52e0' },
  { id: 'basic-grey', name: 'Grey', value: '#808080' },
]

export const defaultSettings: FileColorPluginSettings = {
  cascadeColors: false,
  cascadeToFiles: false,
  colorBackground: false,
  palette: [],
  fileColors: [],
  favorites: [],
  recentColors: [],
}
