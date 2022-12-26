import { IconsTypes } from "../../../utilities/IconsListTypes"

const selectOptions = Object.entries(IconsTypes).map(
  ([key, icon]) => ({ value: key, label: <i className={`${icon} d-flex justify-content-center`}></i> })
)

export default [
  { value: null, label: <div className='text-center'>Todo</div> },
  ...selectOptions
]