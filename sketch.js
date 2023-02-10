function setup() {
    // put setup code here 
    createCanvas(400,400);
    background(200);

    x1=20;
    x2=250;

    y1=240;
    y2=37;

    x=199;
    y=199;

    lebar=79;
    tinggi=79;

    sudut_awal=45;
    sudut_akhir=270;

   }


   function draw() {
    // put drawing code here
    //line(x1,y1,x2,y2)
    
    strokeWeight(3);
    rect(x-lebar/2,y-tinggi/2,lebar,tinggi)
    //llipse(x,y,lebar,tinggi);
    
    strokeWeight(3);
    arc(x,y,lebar,tinggi, sudut_awal, sudut_akhir);


        for (var j=10; j<=390;j++){
        xi = j
        yi = 100+ 30 * Math.sin(PI/10*xi)
        point(xi,yi)
        }
        let j;
        function setup() {
         // put setup code here
         createCanvas(400,200);
        
         y = 100;
         j = 0;
        }
        function draw() {
         background(200,5);
         var y = 100 + 30 * Math.sin(PI/10*j)
         j+=1
         fill(255,0,0);
         ellipse(300, y, 20, 20);
   }
