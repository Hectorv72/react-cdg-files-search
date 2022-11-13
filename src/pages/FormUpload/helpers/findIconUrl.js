import { IconsTypes } from "../../../utilities/IconsListTypes"

export default (url = '') => {
  return Object.keys(IconsTypes).find(icon => url.includes(icon))
}