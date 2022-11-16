import { IconsTypes } from "../../../utilities/IconsListTypes"

const order = [...Object.keys(IconsTypes), ""]

export const fnSortListTypes = (a, b) => order.indexOf(a.type) - order.indexOf(b.type)

export default (list = []) => {
  return list.sort(fnSortListTypes)
}
