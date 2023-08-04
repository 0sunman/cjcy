import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import recipeStyle from "@/styles/Recipe.module.scss";
import { useEffect, useRef, useState } from 'react';
import styled from "@emotion/styled";

const Section = styled.div<{height:number}>`
    width:100%; height:${props => props.height}px; 
    color:white; font-size:100px;
    display:flex; flex-direction:column; align-items:start; justify-content:start;
    & > div:nth-child(0){position:fixed;top:0; width:100%;}
    & > div{width:100%}
    position:relative;
`

const inter = Inter({ subsets: ['latin'] })

  
const IngredientImageURL = {
  "baekseol":"/ingredient/baekseol.png",
  "buchu":"/ingredient/buchu.png",
  "garlic":"/ingredient/garlic.png",
  "ginger":"/ingredient/ginger.png",
  "haechandel":"/ingredient/haechandel.png",
  "honeySpoon":"/ingredient/honey-spoon.png",
  "hotPepper":"/ingredient/hot-pepper.png",
  "kkaeleaf":"/ingredient/kkaeleaf.png",
  "meat":"/ingredient/meat.png",
  "onion":"/ingredient/onion.png",
  "water":"/ingredient/water.png",
  "dasida":"/ingredient/dasida.png",
  "pa":"/ingredient/pa.png",
  "pepper":"/ingredient/pepper.png",
  "sesameOil":"/ingredient/sesame-oil.png",
  "sesame":"/ingredient/sesame.png",
  "soySauce":"/ingredient/soy-sauce.png",
  "wineBottle":"/ingredient/wine-bottle.png"
 }
const Recipe = [{
  id:1,imgUrl:"/recipe/20230731/1.jpg",text:"각각의 재료를 준비한다.",products:[
    {"name":"밀키트", "url":"https://front.wemakeprice.com/product/325669315?utm_source=naver_ss&utm_medium=cpc&utm_campaign=r_sa&nv_ad=pla&n_media=27758&n_query=%EC%A0%9C%EC%9C%A1%EB%B3%B6%EC%9D%8C%EB%B0%80%ED%82%A4%ED%8A%B8&n_rank=1&n_ad_group=grp-a001-02-000000029808576&n_ad=nad-a001-02-000000255557925&n_campaign_type=2&n_mall_id=wemakeprice&n_mall_pid=325669315_325669315&n_ad_group_type=2&NaPm=ct%3Dlkm3q83c%7Cci%3D0ya0000VgabyeXdmUL0A%7Ctr%3Dpla%7Chk%3D9b449e55de5b77f6803a342ccfcfa8f61a6f0f30",
    imgUrl:IngredientImageURL["meat"]}
  ]
},{
  id:2,imgUrl:"/recipe/20230731/2.jpg",text:"부추는 6cm 길이로 자르고 깻잎은 채 썬다.",products:[
    {"name":"밀키트", "url":"https://front.wemakeprice.com/product/325669315?utm_source=naver_ss&utm_medium=cpc&utm_campaign=r_sa&nv_ad=pla&n_media=27758&n_query=%EC%A0%9C%EC%9C%A1%EB%B3%B6%EC%9D%8C%EB%B0%80%ED%82%A4%ED%8A%B8&n_rank=1&n_ad_group=grp-a001-02-000000029808576&n_ad=nad-a001-02-000000255557925&n_campaign_type=2&n_mall_id=wemakeprice&n_mall_pid=325669315_325669315&n_ad_group_type=2&NaPm=ct%3Dlkm3q83c%7Cci%3D0ya0000VgabyeXdmUL0A%7Ctr%3Dpla%7Chk%3D9b449e55de5b77f6803a342ccfcfa8f61a6f0f30",
    imgUrl:IngredientImageURL["meat"]}
  ]
},{
  id:3,imgUrl:"/recipe/20230731/3.jpg",text:"양파는 채 썰고 청양고추는 어슷썬다.",products:[
    {"name":"밀키트", "url":"https://front.wemakeprice.com/product/325669315?utm_source=naver_ss&utm_medium=cpc&utm_campaign=r_sa&nv_ad=pla&n_media=27758&n_query=%EC%A0%9C%EC%9C%A1%EB%B3%B6%EC%9D%8C%EB%B0%80%ED%82%A4%ED%8A%B8&n_rank=1&n_ad_group=grp-a001-02-000000029808576&n_ad=nad-a001-02-000000255557925&n_campaign_type=2&n_mall_id=wemakeprice&n_mall_pid=325669315_325669315&n_ad_group_type=2&NaPm=ct%3Dlkm3q83c%7Cci%3D0ya0000VgabyeXdmUL0A%7Ctr%3Dpla%7Chk%3D9b449e55de5b77f6803a342ccfcfa8f61a6f0f30",
    imgUrl:IngredientImageURL["meat"]}
  ]
},{
  id:4,imgUrl:"/recipe/20230731/4.jpg",text:"팬에 식용유를 두르고 밑간한 돼지고기 목살을 센 불에서 볶는다.",products:[
    {"name":"목심살(한돈)", 
    "url":"https://front.wemakeprice.com/product/325669315?utm_source=naver_ss&utm_medium=cpc&utm_campaign=r_sa&nv_ad=pla&n_media=27758&n_query=%EC%A0%9C%EC%9C%A1%EB%B3%B6%EC%9D%8C%EB%B0%80%ED%82%A4%ED%8A%B8&n_rank=1&n_ad_group=grp-a001-02-000000029808576&n_ad=nad-a001-02-000000255557925&n_campaign_type=2&n_mall_id=wemakeprice&n_mall_pid=325669315_325669315&n_ad_group_type=2&NaPm=ct%3Dlkm3q83c%7Cci%3D0ya0000VgabyeXdmUL0A%7Ctr%3Dpla%7Chk%3D9b449e55de5b77f6803a342ccfcfa8f61a6f0f30"
    ,imgUrl:IngredientImageURL["meat"]}
  ]
},{
  id:5,imgUrl:"/recipe/20230731/5.jpg",text:"청양고추와 고추장 양념을 넣어 볶는다.",products:[
    {"name":"백설(설탕)", "url":"https://www.cjthemarket.com/pc/prod/prodDetail?prdCd=40134530&plnId=300004",imgUrl:IngredientImageURL["baekseol"]},
    {"name":"해찬들(고추장)", "url":"https://www.cjthemarket.com/pc/prod/prodDetail?prdCd=40162670&plnId=300004",imgUrl:IngredientImageURL["haechandel"]},
    {"name":"해찬들(진간장)", "url":"https://www.cjthemarket.com/pc/prod/prodDetail?prdCd=30206668&plnId=300004",imgUrl:IngredientImageURL["soySauce"]}
  ]
},{
  id:6,imgUrl:"/recipe/20230731/6.jpg",text:"그릇에 제육볶음을 담고 부추, 실파, 깻잎, 통깨를 올린다.",products:[
    {"name":"밀키트", "url":"https://front.wemakeprice.com/product/325669315?utm_source=naver_ss&utm_medium=cpc&utm_campaign=r_sa&nv_ad=pla&n_media=27758&n_query=%EC%A0%9C%EC%9C%A1%EB%B3%B6%EC%9D%8C%EB%B0%80%ED%82%A4%ED%8A%B8&n_rank=1&n_ad_group=grp-a001-02-000000029808576&n_ad=nad-a001-02-000000255557925&n_campaign_type=2&n_mall_id=wemakeprice&n_mall_pid=325669315_325669315&n_ad_group_type=2&NaPm=ct%3Dlkm3q83c%7Cci%3D0ya0000VgabyeXdmUL0A%7Ctr%3Dpla%7Chk%3D9b449e55de5b77f6803a342ccfcfa8f61a6f0f30",
    imgUrl:IngredientImageURL["meat"]}
  ]
}]
const bottomDesign = (index:number) => {
  if(Recipe[index] === undefined && Recipe[index]?.products === undefined){
    return <></>
  }
  return ((<ul style={{"display":"flex","flexDirection":"row"}}> {Recipe[index].products?.map((ele:any,idx:any)=>(
    <li key={idx}
    style={{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center","width":"80px","height":"120px","marginLeft":"20px","cursor":"pointer"}}>
      <img src={ele.imgUrl} style={{width:"auto",height:"70%"}} 
      onClick={()=>{ window.open(ele.url); }}/>
      <span style={{display:"flex",alignItems:"center",fontSize:"12px",color:"#000",height:"30%"}}>{ele.name}</span>
    </li>
  ))}</ul>))
}


export default function Home() {
  
  const Scene = useRef([
    {
        heightNum : 4,
        stackSum : 0,
        progress: [

        ]
    },
    {
        heightNum : 1.3,
        stackSum : 0
    },
    {
        heightNum : 10,
        stackSum : 0
    },
    {
        heightNum : 1,
        stackSum : 0
    }
  ])

  const CurrentScene = useRef(0);
  const [WindowHeight, setWindowHeight] = useState(0);
  const [Progress, setProgress] = useState(0);
  const scrollEvent = () =>{
      const currentY = Math.floor(window.pageYOffset);
      const WindowHeight = window.innerHeight;
      const Scenes = Scene.current;
      let allHeight = Scenes[CurrentScene.current].stackSum;

      if( currentY > allHeight){
          CurrentScene.current++;
      }

      if(CurrentScene.current > 0 && currentY < Scenes[CurrentScene.current - 1].stackSum){
        CurrentScene.current--;
      }

      console.log(CurrentScene.current + " / " + currentY +" / "+ allHeight)
      
      if(CurrentScene.current > 0){
        const newCurrentY = currentY - Scenes[CurrentScene.current - 1].stackSum;
        const newAllHeight = allHeight - Scenes[CurrentScene.current - 1].stackSum;
        setProgress( newCurrentY / newAllHeight );
      }else{
        setProgress(currentY / allHeight);
      }
      setWindowHeight(window.innerHeight);
  }
  useEffect(()=>{
    console.log(Math.floor(Progress*100)+"%");
  },[Progress])


  useEffect(()=>{
      setWindowHeight(window.innerHeight);
      window.addEventListener("scroll",scrollEvent)
      return ()=>{
          window.removeEventListener("scroll",scrollEvent)
      }
  },[]);
  useEffect(()=>{
    let sum = 0;
    Scene.current = Scene.current.map((ele:any)=>{
        sum += (window.innerHeight * ele.heightNum);
        ele.stackSum = sum;
        return ele;
    })
  },[WindowHeight]);

  /*

  */
 type Ingredient = {
  [key: string]: string;
 }
  const MainData = {
    SubTitle:"환상의 한 쌈",
    Title:"제육쌈밥정식",
    Time:"30분",
    Nance:"중",
    Description:[
      "매콤하게 볶은 돼지 목살을 쌈채소에 싸 먹으면 영양 가득한 한 끼 식사가 만들어진다.",
      "엄선해 고른 고품질 재료들로 만들어 먹음직스러운 붉은 빛깔의 고추장 양념은 돼지고기에 마성의 매콤함을 선사한다.",
      "푸짐하면서도 간단하게 준비할 수 있어 캠핑요리로도 손색이 없다."
    ],
    MainIngredient: [
      {url:IngredientImageURL["meat"], text:"돼지고기 목살",weight:"200 g"},
      {url:IngredientImageURL["buchu"], text:"부추",weight:"30 g"},
      {url:IngredientImageURL["kkaeleaf"], text:"깻잎",weight:"3 장"},
      {url:IngredientImageURL["hotPepper"], text:"청양고추",weight:"1 개"},
      {url:IngredientImageURL["pa"], text:"실파",weight:"약간"},
      {url:IngredientImageURL["sesame"], text:"통깨",weight:"약간"}],
    SourceIngredient:[
      {url:IngredientImageURL["garlic"], text:"간 마늘",weight:"6 g"},
      {url:IngredientImageURL["baekseol"], text:"백설 설탕",weight:"5 g"},
      {url:IngredientImageURL["wineBottle"], text:"맛술",weight:"5 g"},
      {url:IngredientImageURL["sesameOil"], text:"참기름",weight:"5 g"},
      {url:IngredientImageURL["ginger"], text:"간 생강",weight:"2 g"},
      {url:IngredientImageURL["pepper"], text:"후추",weight:"약간"}
    ],
    OptionIngredient:[
      {url:IngredientImageURL["soySauce"], text:"진간장",weight:"400 g"},
      {url:IngredientImageURL["haechandel"], text:"해찬들 태양초 고추장",weight:"300 g"},
      {url:IngredientImageURL["baekseol"], text:"백설 스위트리 알룰로스(분말)",weight:"200 g"},
      {url:IngredientImageURL["baekseol"], text:"백설 올리고 물엿",weight:"200 g"},
      {url:IngredientImageURL["hotPepper"], text:"고춧가루",weight:"150 g"},
      {url:IngredientImageURL["garlic"], text:"다진마늘",weight:"120 g"},
      {url:IngredientImageURL["baekseol"], text:"백설 리그난 참기름",weight:"120 g"},
      {url:IngredientImageURL["water"], text:"물",weight:"100 g"},
      {url:IngredientImageURL["onion"], text:"다진 양파",weight:"100 g"},
      {url:IngredientImageURL["pa"], text:"다진 파",weight:"100 g"},
      {url:IngredientImageURL["hotPepper"], text:"청양 고춧가루",weight:"50 g"},
      {url:IngredientImageURL["wineBottle"], text:"맛술",weight:"50 g"},
      {url:IngredientImageURL["dasida"], text:"다시다",weight:"40 g"},
      {url:IngredientImageURL["ginger"], text:"간 생강",weight:"40 g"},
      {url:IngredientImageURL["pepper"], text:"후추 조금",weight:"약간"}],
    Recipe
  }
  return (
    <div className={recipeStyle.Main}>
      <Section height={WindowHeight * 4}>
        <div style={{visibility:CurrentScene.current === 0 ? "visible" : "hidden"}}>
          <div className={recipeStyle.Image}></div>
          {/* <img src="https://www.cj.co.kr/images/theKitchen/PHON/0000002426/0000010521/0000002426.jpg"/> */}
          <div className={recipeStyle.Section1}>
            <div className={recipeStyle.Text}>
              <p className={recipeStyle.SubTitle}>{MainData.SubTitle}</p>
              <h2>{MainData.Title}</h2>
              <p className={recipeStyle.Message}>
                {Progress > 0 && Progress < 0.33 && MainData.Description[0]}
                {Progress > 0.33 && Progress < 0.66 && MainData.Description[1]}
                {Progress > 0.66 && Progress < 0.99 && MainData.Description[2]}
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section height={WindowHeight}>
        <div className={recipeStyle.Page2} style={{backgroundColor:"white", height:"100%"}}>
          <h2>재료</h2>
          <h4>메인</h4>
          <ul className={recipeStyle.Ingredient}>
            {MainData.MainIngredient.map((ele:any,idx:any) => <li key={idx}>
              <Image src={ele.url} alt={ele.text} width={50} height={50}/>
              <span>{ele.text}</span>
              <span>{ele.weight}</span>
            </li>)}
          </ul>
          <h4>소스</h4>
          <ul className={recipeStyle.Ingredient}>
            {MainData.SourceIngredient.map((ele:any,idx:any) => <li key={idx}>
              <Image src={ele.url} alt={ele.text} width={50} height={50}/>
              <span>{ele.text}</span>
              <span>{ele.weight}</span>
            </li>)}
          </ul>
          <h4>옵션</h4>
          <ul className={recipeStyle.Ingredient}>
            {MainData.OptionIngredient.map((ele:any,idx:any) => <li key={idx}>
              <Image src={ele.url} alt={ele.text} width={50} height={50}/>
              <span>{ele.text}</span>
              <span>{ele.weight}</span>
            </li>)}
          </ul>
        </div>
      </Section>

      <Section height={WindowHeight * 10}>
        <div style={{visibility:CurrentScene.current === 2 ? "visible" : "hidden"}}>
          {/*<div className={recipeStyle.Image}></div>*/}
          
          {Progress > 0    && Progress < 0.16 &&<img src={Recipe[0].imgUrl} style={{"width":"375px","position":"fixed", "top":"15%"}}/>}
          {Progress > 0.16 && Progress < 0.32 &&<img src={Recipe[1].imgUrl} style={{"width":"375px","position":"fixed", "top":"15%"}}/>}
          {Progress > 0.32 && Progress < 0.48 &&<img src={Recipe[2].imgUrl} style={{"width":"375px","position":"fixed", "top":"15%"}}/>}
          {Progress > 0.48 && Progress < 0.66 &&<img src={Recipe[3].imgUrl} style={{"width":"375px","position":"fixed", "top":"15%"}}/>}
          {Progress > 0.66 && Progress < 0.82 &&<img src={Recipe[4].imgUrl} style={{"width":"375px","position":"fixed", "top":"15%"}}/>}
          {Progress > 0.82 && Progress < 1    &&<img src={Recipe[5].imgUrl} style={{"width":"375px","position":"fixed", "top":"15%"}}/>}
          <div className={recipeStyle.Section1}>
            <div className={recipeStyle.Text}>
              <p className={recipeStyle.SubTitle}>제육쌈밥정식</p>
              <h2>
                {Progress > 0    && Progress < 0.16 &&   (<p style={{"paddingTop": "5px"}}><b>1</b> - 2 - 3 - 4 - 5 - 6</p>)}
                {Progress > 0.16 && Progress < 0.32 &&   (<p style={{"paddingTop": "5px"}}>1 - <b>2</b> - 3 - 4 - 5 - 6</p>)}
                {Progress > 0.32 && Progress < 0.48 &&   (<p style={{"paddingTop": "5px"}}>1 - 2 - <b>3</b> - 4 - 5 - 6</p>)}
                {Progress > 0.48 && Progress < 0.66 &&   (<p style={{"paddingTop": "5px"}}>1 - 2 - 3 - <b>4</b> - 5 - 6</p>)}
                {Progress > 0.66 && Progress < 0.82 &&   (<p style={{"paddingTop": "5px"}}>1 - 2 - 3 - 4 - <b>5</b> - 6</p>)}
                {Progress > 0.82 && Progress < 1    &&   (<p style={{"paddingTop": "5px"}}>1 - 2 - 3 - 4 - 5 - <b>6</b></p>)}
              </h2>
              <p className={recipeStyle.Message2}>
                {Progress > 0    && Progress < 0.16 && Recipe[0].text}
                {Progress > 0.16 && Progress < 0.32 && Recipe[1].text}
                {Progress > 0.32 && Progress < 0.48 && Recipe[2].text}
                {Progress > 0.48 && Progress < 0.66 && Recipe[3].text}
                {Progress > 0.66 && Progress < 0.82 && Recipe[4].text}
                {Progress > 0.82 && Progress < 1    && Recipe[5].text}
              </p>
            </div>
              <div style={{position:"fixed","bottom":"40px","width":"100%","maxWidth":"375px","paddingBottom":"20px"}}>
                <h2 style={{color:"#000",paddingBottom:"20px"}}>구매하기</h2>
                {Progress > 0    && Progress < 0.16 && bottomDesign(0) }
                {Progress > 0.16 && Progress < 0.32 && bottomDesign(1) }
                {Progress > 0.32 && Progress < 0.48 && bottomDesign(2) }
                {Progress > 0.48 && Progress < 0.66 && bottomDesign(3) }
                {Progress > 0.66 && Progress < 0.82 && bottomDesign(4) }
                {Progress > 0.82 && Progress < 1    && bottomDesign(5) }
              </div>
          </div>
        </div>
      </Section>

      <Section height={WindowHeight}>
        <div style={{width:"100%",height:`${WindowHeight}px`, fontSize:"5px",display:"flex",background:"white",flexDirection:"column",color:"#000",padding:"0px 20px"}}>
          <h2>리소스 출처</h2>
          <p style={{fontSize:"5px"}}><a href="https://www.cjthemarket.com/">CJ더마켓</a> 전체 이미지</p>
          <p><a target="_blank" href="https://icons8.com/icon/OIc5mOK0CRfO/meat">Meat</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/KSsv4cKgUzqR/leaf">Leaf</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/G1xj4elfgANy/grass">Grass</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/nlIIz9nKHTpf/scallions">green onion</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/kQs5iqwxfvbp/hot-pepper">Hot Pepper</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/2xgfdL6Vbx79/sesame">Sesame</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/xi2mUB7l9vgu/garlic">Garlic</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/K1ZVDwl6zcqM/sesame-oil">Sesame Oil</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/X7YV8FudXgbP/granulated-garlic">Granulated Garlic</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/afMrhPmVhNz9/wine-bottle">Wine Bottle</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/kRQXpvpMOJWe/ginger">Ginger</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/3i5LsTVSkUUa/pepper">Pepper</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/COT3n5g0HNI9/soy-sauce">Soy Sauce</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/1M0WNfyF7SI6/honey-spoon">Honey Spoon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/Y4waUc69MGoY/onion">Onion</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/64480/water-glass">Water Glass</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
        </div>
      </Section>
      
      {/* <h2>레시피</h2> */}
      {/* <ul>
        {MainData.Recipe.map((ele,idx)=><li key={idx}>
          <Image src={ele.imgUrl} alt={'레시피'+idx} width={640} height={424}></Image>
          {ele.text}
        </li>)}
      </ul> */}
      <div className='down-arrow'></div>

    </div>
  )
}
