<template>
  <div class="anime-sections py-8 container mx-auto relative" ref="container">
    <div class="anime-sections-nav justify-center" ref="nav"  v-show="navVisible">
        <ul class="flex gap-16 py-4 items-center justify-center">
             <li 
                class="nav-item relative" 
                v-for="(section, index) in sections" 
                :key="index" 
                :class="{ active: activeSection === index }"
                @click="scrollToSection(index)" 
            >
                <div class="count" v-text="section.tab"></div>
                <div class="icon">
                    <img src="@/assets/img/new-arrow.svg" alt="Arrow down">
                </div>
            </li>
        </ul>
    </div>
   <div class="flex items-center justify-center">
    <div class="anime-sections-content">
        <div 
            class="anime-sections-item" 
            v-for="(section, index) in sections" 
            :key="index" 
            ref="sectionRefs"
            :style="{ opacity: activeSection === index}"
        >
            <AnimeSection
                :smallTitle="section.smallTitle"
                :title="section.title"
                :content="section.content"
                :name="section.name"
                :position="section.position"
                :btn="section.btn"
                :showNextSections="section.showNextSections"
             >
                <template #profilePicture>
                    <picture>
                        <source :srcset="section.profilePicture.webp" type="image/webp">
                        <img :src="section.profilePicture.jpg" alt="Profile picture" type="image/jpg">
                    </picture>
                </template>
            </AnimeSection>
        </div>
   </div>
  </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); 

import firstImageWebp from "@/assets/img/profile-picture.webp";
import firstImageJpg from "@/assets/img/profile-picture.jpg";
import secondImageWebp from "@/assets/img/profile-picture-2.webp";
import secondImageJpg from "@/assets/img/profile-picture-2.jpg";
import thirdImageWebp from "@/assets/img/profile-picture-3.webp";
import thirdImageJpg from "@/assets/img/profile-picture-3.jpg";

const sections = [
    {
        smallTitle: "Software Development",
        title: "Delivery Excellence",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ",
        name: "John Doe",
        position: "Senior software engineer",
        btn: true,
        profilePicture: {
            webp: firstImageWebp,
            jpg: firstImageJpg
        },
        tab: "Delivery Excellence",
        showNextSections: true
    },
    {
        smallTitle: "Software Development",
        title: "Analysis & Design",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        name: "John Doe",
        position: "Senior software engineer",
        btn: false,
        profilePicture: {
            webp: secondImageWebp,
            jpg: secondImageJpg
        },
        tab: "Analysis & Design",
        showNextSections: false
    },
    {
        smallTitle: "Software Development",
        title: "Implementation",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        name: "John Doe",
        position: "Senior software engineer",
        btn: false,
        profilePicture: {
            webp: thirdImageWebp,
            jpg: thirdImageJpg
        },
        tab: "Implementation",
        showNextSections: false
    },
    {
        smallTitle: "Software Development",
        title: "Tesing & Quality Assurance",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        name: "John Doe",
        position: "Senior software engineer",
        btn: false,
        profilePicture: {
            webp: firstImageWebp,
            jpg: firstImageJpg
        },
        tab: "Testing",
        showNextSections: false
    },
    {
        smallTitle: "Software Development",
        title: "Maintenance",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        name: "John Doe",
        position: "Senior software engineer",
        btn: false,
        profilePicture: {
            webp: secondImageWebp,
            jpg: secondImageJpg
        },
        tab: "Maintenance",
        showNextSections: false
    }
];

const activeSection = ref(0);
const navVisible = ref(false);
const nav = ref(null);
const sectionRefs = ref([]);
const container = ref(null);

const scrollToSection = (index) => {  // Pridané: funkcia na posun na sekciu
        activeSection.value = index; // Nastavenie aktívnej sekcie
        const sectionElement = sectionRefs.value[index];
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Plynulý posun na sekciu
        }
    };


onMounted(() => {


    ScrollTrigger.create({
        trigger: container.value,
        start: "top center",
        end: "bottom bottom",
        markers: false,
        onEnter: () => {
            navVisible.value = true;
            gsap.to(nav.value, { y: 0, opacity: 1, duration: 0.5 }); 
        },
        onLeave: () => { 
             gsap.to(nav.value, { y: -100, opacity: 0, duration: 0.5 });
             setTimeout(() => {
                navVisible.value = false;
             }, 200);
        },
        onEnterBack: () => {
            navVisible.value = true; 
            gsap.to(nav.value, { y: 0, opacity: 1, duration: 0.5 }); 
        },
        onLeaveBack: () => {
            gsap.to(nav.value, { y: -100, opacity: 0, duration: 0.5 }); 
              setTimeout(() => {
                navVisible.value = false;
             }, 200);
        }
    });
    
    sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: sectionRefs.value[index],
            start: "top center",
            end: "bottom center",
            markers: false,
            onEnter: () => {
            
             
                    activeSection.value = index; // Nastavenie aktívnej sekcie
                    gsap.to(sectionRefs.value[index], { opacity: 1, duration: 0.5 }); // Animácia zobrazenia sekcie
      
            },
            onLeave: () => {
                    gsap.to(sectionRefs.value[index], { opacity: 0, duration: 0.5 }); // Animácia skrytia sekcie
            },
             onEnterBack: () => {
                activeSection.value = index; // Nastavenie aktívnej sekcie
                gsap.to(sectionRefs.value[index], { opacity: 1, duration: 0.5 }); // Animácia zobrazenia sekcie
            },
            onLeaveBack: () => {
                gsap.to(sectionRefs.value[index], { opacity: 0, duration: 0.5 }); // Animácia skrytia sekcie
                if (index > 0) {
                    gsap.to(sectionRefs.value[index - 1], { opacity: 1, duration: 0.5 }); // Zobraziť predchádzajúcu sekciu
                }
            }
        });
    });
});
</script>

<style lang="scss" scoped>
.anime-sections-item {
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.anime-sections-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    left: 0px;

    .nav-item .count {
        cursor: pointer;
        display: block;
        height: 80px;
        padding-left: 16px;
        padding-right: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 32px;
        background-color: $grey-color;
        width: 160px;
        text-align: center;
    }

    .nav-item .icon {
        position: absolute;
        transform: rotate(-32deg) translate(162px, 25px);

        img {
            width: 52px;
        }
    }
    

    .nav-item:last-child {
        .icon {
            display: none;
        }
    }
}

.anime-sections-item {
    opacity: 0; // Skryť všetky sekcie predtým, ako sa zobrazí aktívna
}

.anime-sections-item[style*="display: block"] {
   opacity: 1;// Zobraziť iba aktívnu sekciu
}

.active {
    font-weight: bold;
    color: blue; // alebo akákoľvek farba pre aktívnu sekciu
}

</style>