<template>
    <div class="wrapper">
        <div id="_intro">
            <h3 id="my_work">What I've been up to lately</h3>
            <p id="work_para">My primary focus is frontend web development. I like to create websites that are easy to use and easier on the eyes. 
                In addition, I do offer maintenance plans. Feel free to contact me with any of these needs!</p>
            <div id="_intro_btn">
                <v-btn
                id="_resume"
                flat
                >
                Resume
                </v-btn>
                <p id="btn_message"> You will be tempted to hire me !</p>
            </div>
        </div>
            <!--------------------------------------        Website | Description Grid         -------------------------->
        <div id="img_" v-for="card in cards" :key='card'>
            <div id="main_img">
                    <img id="_img_index" :src="card.image" alt="">
            </div>
            <div id="project_description">
                <p> {{ card.description}} </p>
                <p id="card_title"> {{ card.title }} </p>
            <!--------------------------------------       Github | Web Links         -------------------------->
                <div id="links">
                    <a :href="card.git" id="code_link" target="_blank">
                        <font-awesome-icon :icon="['fab', 'github']" class="icon alt"/>
                            {{ card.code }} </a>
                    <a id="website_link" :href="card.url" target="_blank">
                        <font-awesome-icon :icon="['fa', 'link']" class="icon alt"/>
                            LINK
                    </a>
                </div>
            </div>
            </div>
            <!--------------------------------------        Mobile Version | Description Grid         -------------------------->
            <div v-for="mbl in mobile" :key='mbl' id="mobile_apps">
                <div id="mobile_image">
                    <img :src="mbl.image" alt="">
                </div>
                <div id="mobile_description">
                    <p> {{ mbl.description }} </p>
                    <p id="mbl_title"> {{ mbl.title }} </p>
            <!--------------------------------------       Mobile Github | Web Links         -------------------------->
                    <div id="links">
                        <a :href="mbl.git" id="code_link" target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']" class="icon alt"/>
                                {{ mbl.code }} </a>
                        <a id="website_link" :href="mbl.link" target="_blank">
                            <font-awesome-icon :icon="['fa', 'link']" class="icon alt"/>
                                LINK
                        </a>
                    </div>
                </div>
            </div>
        </div>

</template>
<script>
export default {
    data() {
        
        return {
            cards: [
                {
                    code: 'SOURCE',
                    git: 'https',
                    title:'VUE - CSS - JS - VUETIFY - FIREBASE',
                    image: require('../assets/mywebsite.png'),
                    url: 'https',
                    description: 'This is the very website you are cruising through. I designed my portfolio using Vue.js to challenge myself in a new framework as well make room for future components that interest me.',
                },
                {
                    code: 'SOURCE',
                    git: 'https',
                    title:'HTML5 - CSS - JS - NETLIFY',
                    image: require('../assets/smallbusiness.png'),
                    url:'https://modest-poitras-e281ac.netlify.com/#models',
                    description: 'This website was inspired by my interests towards container homes and projects. It is built using the "basics" with the addition of animante.css. It contains a "success" page upon entering correct form parameters. ',
                },
                {
                    code: 'SOURCE | N/A',
                    git: 'https',
                    title:'NUXT - CSS - JS - NETLIFY - VUETIFY',
                    image: require('../assets/atxglass.png'),
                    url: 'https://atxglassworx.netlify.com/',
                    description: 'ATXglassworx is a local company that hired me to give them a simple mobile first online presense in the Austin area.',
                }
            ],
            mobile: [
                {
                    code: 'SOURCE',
                    git: 'https',
                    title: 'JS - CSS3 - HTML5',
                    image: require('../assets/weatherApp.png'),
                    link: 'https://github.com/zeketx/Weather-App',
                    description: 'The vanilla javascript weather app has by far been my favorite project since really hitting programming hard this January. Making API calls and digging for bugs is probably the thing I love the most in this Journey.'
                },
                {
                    code: 'SOURCE',
                    git: 'https',
                    title: 'html - css',
                    image: require('../assets/email1.2.png'),
                    link: 'https://github.com/zeketx/HTML-email-Templates/blob/master/template1.2.html',
                    description: 'I took the misses most frequented shopping emails and challenged myself to build them from scratch using email formatting.'
                },
                {
                    code: 'SOURCE',
                    git: 'https',
                    title: 'html - css',
                    image: require('../assets/email1.3.png'),
                    link: 'https://github.com/zeketx/HTML-email-Templates/blob/master/template1.3.html',
                    description: 'I took the misses most frequented shopping emails and challenged myself to build them from scratch using email formatting.'
                },
                {
                    code: 'SOURCE',
                    git: 'https',
                    title: 'html - css',
                    image: require('../assets/email1.1.png'),
                    link: 'https://github.com/zeketx/HTML-email-Templates/blob/master/template1.1.html',
                    description: 'I took the misses most frequented shopping emails and challenged myself to build them from scratch using email formatting.'
                }
            ]
        }
    }
}
</script>
<style scoped>
    /*  -----------------         Main Grid Display            -----------------------  */
       .wrapper {
           height: 100vh;
           display: grid;
           padding-top: 50px;
           grid-template-columns: 150px 1fr 1fr 150px;
           grid-template-rows:auto;
       }

    /*  -----------------         Main Grid Display            -----------------------  */   
       #_intro {
           grid-column: 2/4;
           text-align: center;
           padding-bottom: 6%;
       }

        #_intro_btn #btn_message {
           visibility:hidden;
       }

        #_intro_btn:hover #btn_message {
           visibility:visible;
           font-weight: 300;
           color: rgb(25, 23, 23);
         }

        #_resume {
           border: 1px solid grey;
           border-radius: 15px;
       }

       #_resume:hover {
           box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
           transition: all .4s ease-in-out;
       }

        #my_work {
            font-weight: 200;
            font-size: 30px;
        }
        #work_para {
            font-weight: 300;
            display: block;
            padding: 10px 40px;
        }
        

       /*  -----------------         Website Sub Grid Display            -----------------------  */
      
       #img_ {
           grid-column: 2/4;
           display: grid;
           grid-template-columns: 1fr 1fr;
           padding-bottom: 80px;
       }

       #main_img{
           grid-column: 1/2;
       }

       #project_description {
           grid-column: 2/3;
           padding-left: 9%;
           font-weight: 300;
       }

       #card_title {
           font-size: 12px;
           font-weight: bold;
       }

        #_img_index {
           max-width: 100%;
           -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
           -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
            box-shadow:         3px 3px 5px 6px #ccc; 
        }

       /*  -----------------        Mobile Sub Grid Display            -----------------------  */

       #mobile_apps {
           grid-column: 2/4;
           display: grid;
           grid-template-columns: 1fr 1fr;
           text-align: center;
       }

       #mobile_image {
           grid-column: 1/2;
           padding-bottom: 80px;
           display: block;
       }

       #mobile_image img {
           height: 400px;
       }

       #mobile_description{
           grid-column: 2/3;
           padding-left: 9%;
           text-align: left;
           font-weight: 300;
       }

       #mbl_title {
           font-size: 12px;
           font-weight: bold;
       }

       /*  -----------------        Link Section Styling            -----------------------  */

       #links {
           padding-top: 20px;
       }

       #code_link {
           font-size: 12px;
           color: #000;
           border: 1px solid grey;
           border-radius: 40px;
           padding: 5px 30px;
           text-decoration: none;
           box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
           transition: all .4s ease-in-out;
       }

       #code_link:hover {
           transform: scale(1.1);
           color: #fff;
           background-color: grey;
           box-shadow: 0px 8px 15px rgba(0,0,0,0.3);
       }

       #website_link {
           font-size: 12px;
           color:#fff;
           background-color: #1c90ee;
           border: 1px solid #1c90ee;
           border-radius: 40px;
           padding: 5px 35px;
           text-decoration: none;
           margin-left: 42px;
           box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
           transition: all .4s ease-in-out;
       }
       #website_link:hover {
           transform: scale(1.1);
           color: #1c90ee;
           background-color: #fff;
           box-shadow: 0px 8px 15px rgba(0,0,0,0.3);
       }

    /*  -----------------         ///-----MEDIA QUERY----///            -----------------------  */

        @media only screen and (max-width: 700px){
        .wrapper {
           display: grid;
           height: auto;
           width: 100vw;
           grid-template-columns: 1fr;
           grid-template-rows: 200px auto;
       }
    /*  -----------------         Main GRID            -----------------------  */

        #_intro {
           grid-column: auto;
       }

        #my_work {
            font-weight: 200;
            font-size: 30px;
        }
        #work_para {
           padding: 5px 10px;
        }
    /*  -----------------         Website GRID / STYLE            -----------------------  */
        #img_ {
           grid-column: auto;
           display: grid;
           grid-template-columns: auto;
           padding-top: 10%;
           width: 100%;
       }
        #_img_index {
           height: 292px;
       }

        #main_img{
           grid-column: auto;
       }

        #project_description {
           grid-column: auto;
           padding-left: 0;
           padding: 10px;
       }

    /*  -----------------         MOBILE GRID / STYLE         -----------------------  */
        #mobile_apps {
           grid-column: auto;
           display: grid;
           grid-template-columns: auto;
           padding-bottom: 10%
       }
        #mobile_image {
           grid-column: auto;
           padding: 2%;
       }
        #mobile_description{
           grid-column: auto;
           padding-left: 0;
           padding: 10px;
       }

    /*  -----------------        LINK / STYLE         -----------------------  */

    }
</style>
