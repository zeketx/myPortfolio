<template>
        <div class="wrapper">
            <div id="deer">
                <img id="_svg_deer" src="../assets/deer.svg" alt="">
            </div>
            <div id="intro_section">
                <p class="desktop_only mobile_only" id="_title_">EZEKIEL MAURICIO</p>
                <p id="_statement"> Front End Engineer</p>
                <p id="_about">Most people call me Zeke. I am a software engineer | neuroscience student based in Austin, Texas who enjoys to bridge the gap between imagination and production.</p>
                <div id="_code">
                    <router-link id="mywork" to="/projects">PORTFOLIO</router-link>
                    <router-link id="contact" to="/contact">LET'S TALK</router-link>
                </div>
            </div>           
        </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /*  -----------------       Main Grid Display           -----------------------  */
    .wrapper {
            height: 100vh;
            display: grid;
            padding-top: 0%;
            grid-template-columns: 1fr 500px 500px 1fr;
            grid-template-rows: auto;
            grid-template-areas: '. intro deer .'
        }
        /*  -----------------       Intro Section           -----------------------  */
        #intro_section {
            width: 100%;
            grid-area: intro;
        }
        #_title_ {
            color: grey;
        }
        #_statement {
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            padding-top: 35%;
            color: #1c90ee;
        }
         #_about {
            font-size: 16px;
            line-height: 25px;
            font-weight: 200;
            padding-top: 15px;
        }
        #_code {
            padding-top: 20px;
        }
        #mywork {
           font-size: 12px;
           color:grey;
           border: 1px solid grey;
           border-radius: 40px;
           padding: 5px 30px;
           text-decoration: none;
           box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
           transition: all .4s ease-in-out;
        }
        #mywork:hover {
            box-shadow: 1px 1px 8px #808080;
        }
        #contact {
           font-size: 12px;
           color:#fff;
           background-color: #1c90ee;
           border: 1px solid #1c90ee;
           border-radius: 40px;
           padding: 5px 35px;
           margin-left: 20px;
           text-decoration: none;
           box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
           transition: all .4s ease-in-out;
        }
        #contact:hover {
            box-shadow: 1px 1px 8px #808080;
        }
        /*  -----------------      Deer Section           -----------------------  */
        #deer {
            grid-area: deer;
            text-align: center;
            padding: 20px;
            /* background-image: url('../assets/deer.svg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            background-position-y: 50%; */
        }
        #_svg_deer {
            height: 350px;
            padding-top: 30%;
            
        }
        /*  -----------------        Media Query  iPhone 7/8   ////Portrait////       -----------------------  */
    @media only screen 
    and (device-width : 375px) 
    and (device-height : 667px) 
    and (-webkit-device-pixel-ratio : 2)
    and (orientation: Portrait) { 
        .wrapper {
          display: grid;
            padding-top: 22%;
            grid-template-columns: auto;
            grid-template-rows: 60px 1fr;
            grid-template-areas: 'deer'
                                 'intro';
        }
        /*  ----------------- Intro Section  -----------------------  */
        
        #intro_section {
            grid-area: intro;
            padding-top: 10%;
        }
        #_title_ {
            text-align: center;
            font-weight: 500;
            font-size: 25px;
        }
        #_statement {
            font-size: 16px;
            font-weight: 400;
            padding: 15px;
            border-top: 1px solid rgba(189, 195, 199, 1);
            border-bottom: 1px solid rgba(189, 195, 199, 1);
        }
        #_about {
            font-weight: 300;
            padding: 20px;
            margin: 18px;
            font-size: 16px;
        }
        #_code {
            padding-left: 35px;
        }
        /*  -----------------  Deer Section -----------------------  */
        #deer {
            grid-area: deer;
            padding-top: 0;
            height: 100px;
        }
        #_svg_deer {
            height: 100px;
            padding-top: 0%;
        }
        #contact {
            padding: 10px 30px;
        }
        #mywork {
            padding: 10px 30px;
        }  
    }
        /*  -----------------        Media Query  iPhone 6+/6s+/7+/8+   ////Portrait////       -----------------------  */
    @media only screen 
    and (device-width : 414px) 
    and (device-height : 736px) 
    and (-webkit-device-pixel-ratio : 3)
    and (orientation: Portrait){
        /*  ----------------- Media Main Grid Display -----------------------  */
        .wrapper {
          display: grid;
            padding-top: 22%;
            grid-template-columns: auto;
            grid-template-rows: 60px 1fr;
            grid-template-areas: 'deer'
                                 'intro';
        }
        /*  ----------------- Intro Section  -----------------------  */
        
        #intro_section {
            grid-area: intro;
            padding-top: 10%;
        }
        #_title_ {
            text-align: center;
            font-weight: 500;
            font-size: 25px;
        }
        #_statement {
            font-size: 16px;
            font-weight: 400;
            padding: 15px;
            border-top: 1px solid rgba(189, 195, 199, 1);
            border-bottom: 1px solid rgba(189, 195, 199, 1);
        }
        #_about {
            font-weight: 300;
            padding: 20px;
            margin: 18px;
            font-size: 16px;
        }
        #_code {
            padding-left: 35px;
        }
        /*  -----------------  Deer Section -----------------------  */
        #deer {
            grid-area: deer;
            padding-top: 0;
            height: 100px;
        }
        #_svg_deer {
            height: 100px;
            padding-top: 0%;
        }
        #contact {
            padding: 10px 30px;
        }
        #mywork {
            padding: 10px 30px;
        }  
    } 
       
    @media (min-width:700px) {
        .desktop_only {
            display:none !important;
    }
}
/*  -----------------        Media Query  iPhone 6+/6s+/7+/8+      ////landscape////   -----------------------  */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 
    .wrapper {
            height: auto;
            display: grid;
            padding-top: 5%;
            grid-template-columns: auto;
            grid-template-rows: 1fr 1fr;
            grid-template-areas: 'intro'
                                 'deer';
  }
  /*  -----------------  Intro Section -----------------------  */
    #_statement{
            font-size: 30px;
            padding-top: 0%;
  }
    #_about {
            font-size: 22px;
            line-height: 43px;
            padding: 20px;
  }
  /*  -----------------  Deer Section -----------------------  */
    #_svg_deer {
            height: 200px;
            padding-top: 3%;
            padding-bottom: 4%;
            
  }
    #_code {
    text-align: center;
  }
    #mywork {
      font-size: 22px;
  }
    #contact {
      font-size: 22px;
  }  
}
/*  -----------------        iPhone X    ////portrait////   -----------------------  */
@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3)
    and (orientation : portrait) {
       .wrapper {
            height: auto;
            display: grid;
            padding-top: 22%;
            grid-template-columns: auto;
            grid-template-rows: 60px 1fr;
            grid-template-areas: 'deer'
                                 'intro';
        }
        /*  -----------------  Intro Section -----------------------  */
         #intro_section {
            grid-area: intro;
            padding-top: 10%;
        }
        #_title_ {
            text-align: center;
            font-weight: 500;
            font-size: 25px;
        }
        #_statement {
            font-size: 16px;
            font-weight: 400;
            padding: 15px;
            border-top: 1px solid rgba(189, 195, 199, 1);
            border-bottom: 1px solid rgba(189, 195, 199, 1);
        }
        #_about {
            font-weight: 300;
            padding: 20px;
            margin: 18px;
            font-size: 16px;
        }
        #_code {
            padding-left: 35px;
        }
        /*  -----------------  Deer Section -----------------------  */
        #deer {
            grid-area: deer;
            padding-top: 0;
            height: 100px;
        }
        #_svg_deer {
            height: 100px;
            padding-top: 0%;
        }
        #contact {
            padding: 10px 30px;
        }
        #mywork {
            padding: 10px 30px;
        } 
     }
/*  -----------------        iPhone X    ////landscape////   -----------------------  */
/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation : landscape) { 
    
    .wrapper {
            height: auto;
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: 1fr 1fr;
            grid-template-areas: 'intro'
                                 'deer';
  }
  /*  -----------------  Intro Section -----------------------  */
    #_statement{
            font-size: 30px;
            padding-top: 0%;
  }
    #_about {
            font-size: 19px;
            line-height: 43px;
            padding: 20px;
  }
  /*  -----------------  Deer Section -----------------------  */
    #_svg_deer {
            height: 200px;
            padding-top: 3%;
            padding-bottom: 4%;
            
  }
    #_code {
    text-align: center;
  }
    #mywork {
      font-size: 19px;
  }
    #contact {
      font-size: px;
  }  
}
/*  -----------------        Ipad Pro Media queries           -----------------------  */
@media only screen 
  and (min-device-width: 1024px) 
  and (max-device-width: 1366px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .wrapper {
            height: 100vh;
            display: grid;
            padding-top: 0%;
            grid-template-columns: 1fr 500px 500px 1fr;
            grid-template-rows: auto;
            grid-template-areas: '. intro deer .'
  }
}
</style>