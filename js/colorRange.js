var content = document.getElementById('content')
var rango = document.getElementById('rango')
var red = document.getElementById('red')
var green = document.getElementById('green')
var blue = document.getElementById('blue')

rango.value = '30'

colorize(0)

rango.oninput = function (e) {
  colorize(rango.value)
}

function addColor (colorRGB) {
  var color = colorRGB[0] + ',' + colorRGB[1] + ',' + colorRGB[2]
  content.innerHTML += '<div class="cuboColor" style="background-color: rgb(' + color + ')"></div>'
}

function colorize (rangeLimit) {
  content.innerHTML = ''

  for (let i = 0; i <= rangeLimit; i++) {
    var R = cleanNegative(parseInt(red.value) - i - 1)
    var G = cleanNegative(parseInt(green.value) - i - 1)
    var B = cleanNegative(parseInt(blue.value) - i - 1)

    addColor([R, G, B])

    // if (i === rangeLimit) {
    //   for (let e = 0; e <= rangeLimit; e++) {
    //     var R2 = parseInt(red.value) + e
    //     var G2 = parseInt(green.value) + e
    //     var B2 = parseInt(blue.value) + e
    //     addColor([R2, G2, B2])
    //   }
    // }
  }
}

function cleanNegative (number) {
  return number <= 0
    ? 0
    : number
}
