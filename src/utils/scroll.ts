export function scrollToId(id: string) {
  setTimeout(() => {
    //gör så att vid klick så åker man ner långsamt till det valda idt, du kan ändra center till start eller end
    //om man vill landa på ett annat ställe/EMMA
    const scrollElement = document.getElementById(id)
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, 200)
}
