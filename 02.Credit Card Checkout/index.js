function cc_format(value) {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  const matches = v.match(/\d{4,16}/g)
  const match = matches && matches[0] || ''
  const parts = []
  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4))
  }
  if (parts.length) {
    return parts.join(' ')
  } else {
    return value
  }
}

window.onload = () => {
  const num4sInput = document.querySelectorAll(".num-4")
  num4sInput.forEach(dom => {
    dom.addEventListener('keydown', e => {
      const ALLOWED_KEYS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight']
      console.log(e.code, 'code')
      const { value } = e.target
      if (value.length > 3 && !ALLOWED_KEYS.includes(e.code)) {
        e.preventDefault()
        return
      }
    })
  })
  document.getElementById('ccn').addEventListener('keydown', e => {
    const ALLOWED_KEYS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Digit9', 'Digit8','Digit7','Digit6','Digit5','Digit4','Digit3','Digit2','Digit1','Digit0']
    const { value } = e.target
    if (!ALLOWED_KEYS.includes(e.code)) {
      e.preventDefault()
      return
    }
    const l = cc_format(value)
    e.target.value = l
    console.log(l, this)
  })
};