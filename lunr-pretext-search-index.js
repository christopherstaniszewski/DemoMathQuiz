var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Christopher Staniszewski Mathematics Framingham State University  Last Updated:        "
},
{
  "id": "Grading",
  "level": "1",
  "url": "Grading.html",
  "type": "Section",
  "number": "1",
  "title": "MATH 123 Quiz Demo",
  "body": " MATH 123 Quiz Demo   Problem 1  Convert the following quadratic function to vertex form ( ). State the vertex. Further, state the domain and range.     Problem 2  Solve the following system of equations.     Problem 3  For each table below, determine whether the data represent a linear function. If it is linear, write a linear function for the data in the table.          0  2    1  5    2  8    3  11             0  4    2  10    5  19    9  31            0  1    1  4    2  9    3  16            -2  -8    -1  -2    0  4    1  11            -3  12    -1  6    1  0    3  -6         Problem 4  Sketch a graph of the following piecewise function.     Problem 5  Write a formula for the quadratic function pictured below.  A parabola.   A downward-opening parabola.      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
