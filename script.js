function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
  
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
  
  
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
    var data = `
    ./Images/-42a4-44b6-8ec4-0034cc481771_000.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_001.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_002.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_003.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_004.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_005.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_006.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_007.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_008.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_009.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_010.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_011.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_012.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_013.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_014.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_015.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_016.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_017.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_018.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_019.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_020.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_021.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_022.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_023.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_024.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_025.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_026.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_027.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_028.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_029.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_030.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_031.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_032.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_033.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_034.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_035.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_036.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_037.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_038.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_039.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_040.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_041.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_042.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_043.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_044.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_045.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_046.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_047.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_048.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_049.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_050.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_051.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_052.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_053.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_054.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_055.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_056.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_057.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_058.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_059.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_060.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_061.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_062.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_063.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_064.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_065.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_066.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_067.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_068.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_069.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_070.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_071.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_072.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_073.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_074.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_075.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_076.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_077.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_078.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_079.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_080.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_081.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_082.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_083.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_084.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_085.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_086.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_087.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_088.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_089.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_090.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_091.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_092.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_093.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_094.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_095.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_096.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_097.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_098.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_099.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_100.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_101.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_102.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_103.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_104.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_105.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_106.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_107.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_108.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_109.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_110.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_111.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_112.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_113.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_114.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_115.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_116.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_117.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_118.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_119.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_120.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_121.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_122.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_123.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_124.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_125.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_126.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_127.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_128.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_129.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_130.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_131.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_132.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_133.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_134.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_135.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_136.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_137.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_138.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_139.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_140.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_141.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_142.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_143.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_144.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_145.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_146.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_147.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_148.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_149.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_150.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_151.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_152.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_153.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_154.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_155.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_156.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_157.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_158.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_159.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_160.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_161.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_162.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_163.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_164.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_165.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_166.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_167.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_168.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_169.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_170.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_171.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_172.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_173.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_174.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_175.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_176.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_177.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_178.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_179.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_180.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_181.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_182.jpg
    ./Images/-42a4-44b6-8ec4-0034cc481771_183.jpg
  `;
    return data.split("\n")[index];
  }

const frameCount = 184;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 1.5,
    trigger: `#page1>canvas`,
    start: `top top`,
    end: `600% bottom`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;


function render() {
    scaleImage(images[imageSeq.frame], context);
  }

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }



ScrollTrigger.create({
    trigger: "#page1>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% bottom`,
  });

document.addEventListener('DOMContentLoaded',() =>{
    setTimeout(() => {
      upword();
      }, 10000);
      function upword(){
        document.querySelector('#main').style.height = 'auto';
        gsap.to('.loader',{
          y:'-100%',
        })
      }
})


function mover(){
  gsap.to('#move',{
    y:'140%',
    scrollTrigger:{
      trigger:'#move',
      start:'center center',
      end:'300% bottom',
      scroller:'#main',
      scrub:1
    }
  })
}

mover();
