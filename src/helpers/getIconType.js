import { IconsTypes } from "../utilities/IconsListTypes"

export default (type) => {
  return IconsTypes[type] || IconsTypes['default']
}