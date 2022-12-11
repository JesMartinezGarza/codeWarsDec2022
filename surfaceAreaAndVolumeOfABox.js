// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    let array = []
    let area = width * height
    let surfaceArea = ((width * height) + (width * depth) + (height * depth)) * 2
    let volume =  area * depth
    array.push(surfaceArea)
    array.push(volume)
    return array
}