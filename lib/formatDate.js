export default function formatDate (date, local) {
  const d = new Date(date)
  return d.toLocaleDateString(local).replace(/\//g, '-')
}
