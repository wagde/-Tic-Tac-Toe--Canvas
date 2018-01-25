window.onload = function () {
    var canvas = new DrawOnCanvas();
    canvas.draw()
     document.getElementById("aa").addEventListener("click", function () {
        var x = document.getElementById('a');
        var y = document.getElementById('aa');
        x.style.display = 'none';
         y.style.display = 'none';
    }
   );

}
class DrawOnCanvas {
    constructor() {
        this.canvas = document.getElementById('tic')
        if (!this.canvas.getContext) throw Error('NOCA');
        this.ctx = this.canvas.getContext('2d')
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.obj = {

            1: [[8, 8], [174.66, 174.66]],
            2: [[174.66, 8], [341.32, 174.66]],
            3: [[341.32, 8], [508, 174.66]],
            4: [[8, 174.66], [174.66, 341.32]],
            5: [[174.66, 174.66], [341.32, 341.32]],
            6: [[341.32, 174.66], [508, 341.32]],
            7: [[8, 341.32], [174.66, 508]],
            8: [[174.66, 341.32], [341.32, 508]],
            9: [[341.32, 341.32], [508, 508]]

        }

        this.obj1 = {
            1: [1, 2, 3],
            2: [4, 5, 6],
            3: [7, 8, 9],
            4: [1, 5, 9],
            5: [3, 5, 7],
            6: [1, 4, 7],
            7: [2, 5, 8],
            8: [3, 6, 9]
        }



        this.stor = []

        this.img = new Image();
        this.img.src = 'http://www.freeiconspng.com/uploads/x-png-18.png';
        this.img1 = new Image();
        this.img1.src = "https://upload.wikimedia.org/wikipedia/commons/2/2d/O-Jolle_insigna.png"

    }
    draw() {
        this.ctx.fillStyle = "#FF0100";
        this.ctx.beginPath();
        this.ctx.shadowColor="black";

        this.ctx.moveTo(0, 166.66);
        this.ctx.lineTo(500, 166.66);

        this.ctx.moveTo(166.66, 0);
        this.ctx.lineTo(166.66, 500);

        this.ctx.moveTo(333.33, 0);
        this.ctx.lineTo(333.33, 500);

        this.ctx.moveTo(0, 333.33);
        this.ctx.lineTo(500, 333.33);
        this.ctx.lineWidth = 10;
        this.ctx.stroke()
        var counter = 0;

        this.canvas.addEventListener('click', (event) => {
            var x = event.pageX;
            var y = event.pageY;
            console.log("hello")
            this.CheckCanvas(x, y, counter++);

        })

    }
    drawX(val) {
        var x = val[1][0];
        var y = val[1][1];
        this.ctx.drawImage(this.img, x - 130, y - 130, 80, 80)


    }

    drawO(val) {

        var x = val[1][0];
        var y = val[1][1];
        this.ctx.drawImage(this.img1, x - 130, y - 130, 80, 80)
 


    }

    CheckCanvas(x, y, counter) {
        for (var val in this.obj) {
            if (x > this.obj[val][0][0] && x < this.obj[val][1][0] & y > this.obj[val][0][1] & y < this.obj[val][1][1]) {
                this.stor.push(val)
                console.log(this.stor)
                //    this.obj.remove(val);
                // this.stor1.push(val)
                if (counter < 9) {
                    if (counter % 2 == 0) {
                        this.drawX(this.obj[val])
                        // this.stor1.push(val)

                    }
                    else {
                        this.stor.push(val)
                        this.drawO(this.obj[val])
                    }

                }

            }
        }
    }

    checkWin(stor) {
        for (x in this.obj1) {
            this.obj1[x]

            for (var i = 0; stor.length; i++) {
                var c = 0
                if (stor[i] == this.obj1[x][c]) {
                    c++;
                }
            }

        }
    }
}









// obj={
//     1:[[8,0],[174.66,174.66]],
//     2:[[174.66,0],[341.32,174.66]],
//     3:[[341.32,0],[508,174.66]],
//     4:[[0,174.66],[174.66,341.32]],
//     5:[[174.66,174.66],[341.32,341.32]],
//     6:[[341.32,174.66],[508,341.32]],
//     7:[[0,341.32],[174.66,508]],
//     8:[[174.66,341.32],[341.32,508]],
//     9:[[341.32,341.32],[508,508]]
// }




