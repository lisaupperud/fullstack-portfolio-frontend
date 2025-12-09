export function scrollToId(id: string) {
  setTimeout(() => {
    const scrollElement = document.getElementById(id)
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, 200)
}
