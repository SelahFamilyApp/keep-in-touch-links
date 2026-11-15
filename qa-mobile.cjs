'use strict';
const path = require('path');
const { chromium, webkit } = require('playwright-core');
const fs = require('fs');
const release = path.resolve(__dirname);
const url = process.argv[2] || 'file:///' + path.join(release,'index.html').replace(/\\/g,'/');
const screens = [280, 320, 344, 360, 375, 390, 393, 402, 412, 414, 428, 430, 480, 667, 768];
const captures = new Set([320,360,390,412,430]);
const directory=path.join(release,'qa_screenshots');
fs.mkdirSync(directory,{recursive:true});
function round(x){return Math.round(x*100)/100}
async function run(){
const b=await chromium.launch({headless:true,channel:'chrome'});
let all=[];
for(const width of screens){
  const p=await b.newPage({viewport:{width,height:900},deviceScaleFactor:width<=430?3:1,isMobile:true,hasTouch:true,locale:'ar-EG',acceptDownloads:true});
  let exceptions=[]; p.on('pageerror',e=>exceptions.push(e.message));
  const response=await p.goto(url,{waitUntil:'networkidle',timeout:25000});
  await p.locator('.cover img').evaluate(x=>x.decode());
  const result=await p.evaluate(()=>{
    const round=x=>Math.round(x*100)/100;
    const box=(el)=>{const r=el.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom}};
    const cover=document.querySelector('.cover'),logo=document.querySelector('.cover img'),heading=document.querySelector('.identity'),grid=document.querySelector('.grid');
    const cr=box(cover),ir=box(logo),hr=box(heading);
    const tiles=[...document.querySelectorAll('.tile')].map(e=>box(e));
    return {
      viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,
      logoWidth:logo.naturalWidth,logoHeight:logo.naturalHeight,
      logoPath:logo.getAttribute('src'),logoVisible:logo.complete&&logo.naturalWidth>0,
      logoInside:ir.x>=cr.x-1 && ir.right<=cr.right+1 && ir.y>=cr.y-1 && ir.bottom<=cr.bottom+1,
      identityAfter:hr.y>=cr.bottom-1,
      coverHeight:round(cr.height),logoRendered:{width:round(ir.width),height:round(ir.height)},
      overflowCSS:getComputedStyle(cover).overflow,
      disabledTiles:document.querySelectorAll('.tile[aria-disabled="true"]').length,
      tiles:tiles.length,
      tilesInside:tiles.every(t=>t.x>=-1 && t.right<=innerWidth+1),
      whatsapp:document.querySelector('[data-id="whatsapp"]').getAttribute('href'),
      facebook:document.querySelector('[data-id="facebook"]')?.getAttribute('href'),
      tiktok:document.querySelector('[data-id="tiktok"]')?.getAttribute('href'),
      instapay:document.querySelector('[data-id="instapay"]')?.getAttribute('href'),
      tileIds:[...document.querySelectorAll('.tile')].map(e=>e.dataset.id),
      hasSaveContact:!!document.getElementById('save'),
      hasShare:!!document.getElementById('share')
    };
  });
  result.width=width;result.jsErrors=exceptions;
  result.passed=result.logoVisible&&result.logoInside&&result.identityAfter&&result.scrollWidth<=result.viewport+1&&result.tilesInside&&result.tiles===4&&result.disabledTiles===0&&result.tileIds.join(',')==='whatsapp,facebook,tiktok,instapay'&&result.whatsapp==='https://wa.me/201552304431'&&result.facebook==='https://www.facebook.com/KEEPINTOUCH72.2'&&result.tiktok==='https://www.tiktok.com/@mohamedelshabraw51'&&result.instapay==='https://ipn.eg/S/mohamed.mansour175505/instapay/5eK26X'&&result.hasSaveContact&&result.hasShare&&exceptions.length===0&&result.logoPath.includes('kit-color-logo-v2.png');
  all.push(result);
  if(captures.has(width)) await p.screenshot({path:path.join(directory,'fixed-'+width+'.png'),fullPage:true});
  await p.close();
}
await b.close();
let webkitResult='not available';
try{
 const w=await webkit.launch({headless:true,timeout:5000});
 const p=await w.newPage({viewport:{width:390,height:844}});
 await p.goto(url);
 webkitResult={logoLoaded:await p.locator('.cover img').evaluate(i=>i.complete&&i.naturalWidth>0)};
 await w.close();
}catch(e){webkitResult='not installed: '+e.message.split('\n')[0]}
const output={url,tests:all.length,passed:all.filter(x=>x.passed).length,failed:all.filter(x=>!x.passed).map(x=>x.width),webkit:webkitResult,results:all};
fs.writeFileSync(path.join(release,'qa-mobile-results.json'),JSON.stringify(output,null,2));
console.log(JSON.stringify(output,null,2));
if(output.failed.length)process.exitCode=2;
}
run().catch(err=>{console.error(err.stack);process.exit(1)});
