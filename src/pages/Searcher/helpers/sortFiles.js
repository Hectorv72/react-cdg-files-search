const handleFilterGroups = (file, tags) => {
  const group = file?.group?.toLowerCase() || null
  return tags.some(tag => tag === group)
}

const handleFilterText = (file, tags) => {
  const filename = file.filename.toLowerCase()
  return tags.some(tag => filename.includes(tag))
}

const handleFilterTags = (file, tags) => {
  return tags.some(tag => file.tags.includes(tag))
}

export default (list, tags) => {
  const first = list.filter(file => handleFilterText(file, tags))
  const second = list.filter(file => handleFilterTags(file, tags))
  const third = list.filter(file => handleFilterGroups(file, tags))
  const data = new Set([...first, ...second, ...third])
  return [...data]
}