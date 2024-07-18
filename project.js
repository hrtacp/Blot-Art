const width = 125;
const height = 125;
setDocDimensions(width, height);
const shth = -7  // shaft thickness
const shl = 135  // shaft length
const cl = -2  
const vw = 56  
const t = new bt.Turtle()
const rr = bt.randInRange

t.left(45).jump([14, 21])

// draw the shaft
t.forward(shl).left(90).forward(shth).left(90)
t.forward(shl).left(90).forward(shth).left(90)

// move to start of vanes
t.up().forward(cl).left(90).forward(shth/2).right(90).down()

// draw vanes
const short = vw * Math.sqrt(2)
const long = shl - cl - 2 * vw

t.left(45)
t.forward(short).right(45).forward(long).right(45).forward(short)
.right(90)
t.forward(short).right(45).forward(long).right(45).forward(short)

drawLines(t.lines())