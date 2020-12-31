
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  Ft=new Ground(235,740,460,20)

  O=new H(09,0,20,1460)
  Line2=new H(450,0,20,1460)
  Line3=new H(180,0,580,20)
  Line4=new Ground(18,659,06,180)
  
  Division=new Divi(88,659,10,180)

  Division1=new Divi(158,659,10,180)

  Division2=new Divi(228,659,10,180)
  Division3=new Divi(298,659,10,180)
  Division4=new Divi(368,659,10,180)

  Division5=new Divi(438,659,05,180)

  Plink=new P(105,30,10)

  Plink1=new P(75,30,10)
  Plink2=new P(135,30,10)
  Plink3=new P(45,30,10)
  Plink4=new P(165,30,10)
  Plink5=new P(15,70,10)
  Plink6=new P(45,70,10)
  Plink7=new P(75,70,10)
  Plink8=new P(105,70,10)
  Plink9=new P(135,70,10)
Plink10=new P(165,70,10)
Plink11=new P(195,70,10)
Plink12=new P(45,110,10)
Plink13=new P(75,110,10)
Plink14=new P(105,110,10)
Plink15=new P(135,110,10)
Plink16=new P(165,110,10)
Plink17=new P(15,150,10)
Plink18=new P(45,150,10)
Plink19=new P(75,150,10)
Plink20=new P(105,150,10)
Plink21=new P(135,150,10)
Plink22=new P(165,150,10)
Plink23=new P(195,150,10)
Plink24=new P(45,190,10)
Plink25=new P(75,190,10)
Plink26=new P(105,190,10)
Plink27=new P(135,190,10)
Plink28=new P(165,190,10)
Par1=new Party(100,360,20)
Par2=new Party(105,182,20)
Pa3=new Part(200,360,20)
Par4=new Part(60,30,20)
Par5=new Part(170,360,20)
Par6=new Art(210,360,20)
Par7=new Party(191,360,20)
Par8=new Art(160,360,20)
Par9=new At(200,300,20)
Par10=new At(130,300,20)
Par11=new Art(141,330,20)
Par12=new Party(90,360,20)
Par13=new At(60,360,20)
Par14=new Art(70,360,20)
Par15=new At(50,360,20)
Par16=new Part(20,360,20)
Par17=new Part(140,360,20)

}

function draw() {
  background("black");  
  Engine.run(engine)
 Ft.display();
 O.display();
 Line2.display();
 Line3.display();
 Line4.display();
 Division.display();
 Division1.display();
 Division2.display();
 Division3.display();
 Division4.display();
 Division5.display();
Plink.display();
Plink1.display();
Plink2.display();
Plink3.display();
Plink4.display();
Plink5.display();
Plink6.display();
Plink7.display();
Plink8.display();
Plink9.display();
Plink10.display();
Plink11.display();
Plink12.display();
Plink13.display();
Plink14.display();
Plink15.display();
Plink16.display();
Plink17.display();
Plink18.display();
Plink19.display();
Plink20.display();
Plink21.display();
Plink22.display();
Plink23.display();
Plink24.display();
Plink25.display();
Plink26.display();
Plink27.display();
Plink28.display();
Par2.display();
Par1.display();
Pa3.display();
Par4.display();
Par5.display();
Par6.display();
Par7.display();
Par8.display();
Par9.display();
Par10.display();
Par11.display();
Par12.display();
Par13.display();
Par14.display();
Par15.display();
Par16.display();
Par17.display();
}