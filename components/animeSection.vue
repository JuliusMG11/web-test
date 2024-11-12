<template>
  <div class="hero-section container mx-auto py-[100px] flex justify-center">
    <div class="hero-section-small">
        <div class="flex gap-14">
            <div class="content">
                <h5>{{ smallTitle }}</h5>
                <h2>{{ title }}</h2>
                <p>
                    {{ content }}
                </p>
            </div>
            <div class="profile flex flex-col items-center gap-8">
                <h6>
                    Garant
                </h6>
                <div class="profile-picture">
                    <slot name="profilePicture" />
                </div>

                <h3>
                    {{ name }}
                </h3>
                <h6>
                    {{ position}}
                </h6>
                <UiBtn v-if="btn" text="Get in touch" type="primary" />
            </div>
        </div>

         <div v-show="showNextSections" class="technology-section py-[140px]">
            <h3 class="pb-16">Technology Areas</h3>
            <div class="technology-boxes grid grid-cols-3 gap-2">
                <div class="technology-box">
                    <div class="icon">
                        <img src="@/assets/img/agile.svg" alt="">
                    </div>
                    <h6>Agile</h6>
                </div>
                <div class="technology-box">
                    <div class="icon">
                        <img src="@/assets/img/waterfall.svg" alt="">
                    </div>
                    <h6>Waterfall</h6>
                </div>
                <div class="technology-box">
                    <div class="icon">
                        <img src="@/assets/img/hybrid.svg" alt="">
                    </div>
                    <h6>Hybrid</h6>
                </div>
                <div class="technology-box">
                    <div class="icon">
                        <img src="@/assets/img/safe.svg" alt="">
                    </div>
                    <h6>Scaled Agiled Framework</h6>
                </div>
                <div class="technology-box">
                    <div class="icon">
                        <img src="@/assets/img/less.svg" alt="">
                    </div>
                    <h6>Lean Scaled Scrum</h6>
                </div>
            </div>
        </div>



            <div v-show="showNextSections" class="technology-stack py-[140px]">
                <h2 class="pb-16">Technology Stack</h2>

                <div class="technology-stack-content flex flex-col gap-12">

                    <div class="technology-stack-item flex">
                        <div class="label">
                            <h6>Ai</h6>
                        </div>
                        <div class="technology-stack-item-icons-container flex gap-6 gap-y-6 items-center flex-wrap">

                            <div class="technology-stack-item-icons-item flex items-center gap-2" v-for="item in technologyStack[0].itemsOne" :key="item.label">
                                <div class="icon">
                                    <img :src="item.icon" alt="">
                                </div>
                                <span>{{ item.label }}</span>
                            </div>

                        </div>
                    </div>

                    <div class="technology-stack-item flex">
                        <div class="label">
                            <h6>Backend</h6>
                        </div>
                        <div class="technology-stack-item-icons-container flex gap-6 gap-y-6 items-center flex-wrap">

                            <div class="technology-stack-item-icons-item flex items-center gap-2" v-for="item in technologyStack[0].itemsTwo" :key="item.label">
                                <div class="icon">
                                    <img :src="item.icon" alt="">
                                </div>
                                <span>{{ item.label }}</span>
                            </div>

                        </div>
                    </div>

                    <div class="technology-stack-item flex">
                        <div class="label">
                            <h6>Frontend</h6>
                        </div>
                        <div class="technology-stack-item-icons-container flex gap-6 gap-y-6 items-center flex-wrap">

                            <div class="technology-stack-item-icons-item flex items-center gap-2" v-for="item in technologyStack[0].itemsThree" :key="item.label">
                                <div class="icon">
                                    <img :src="item.icon" alt="">
                                </div>
                                <span>{{ item.label }}</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


    </div>
  </div>
</template>

<script setup>
import angularIcon from '@/assets/img/angular.svg'
import awsamplifyIcon from '@/assets/img/awsamplify.svg'
import bootstrapIcon from '@/assets/img/bootstrap.svg'
import chatgptIcon from '@/assets/img/chatgbt.svg'
import csharpIcon from '@/assets/img/csharp.svg'
import dialogflowIcon from '@/assets/img/dialogflow.svg'
import dotnetIcon from '@/assets/img/dotnet.svg'
import graphqlIcon from '@/assets/img/graphql.svg'
import javascriptIcon from '@/assets/img/javascript.svg'
import laravelIcon from '@/assets/img/laravel.svg'
import livekitIcon from '@/assets/img/livekit.svg'
import mapnikIcon from '@/assets/img/mapnik.svg'
import mediapipeIcon from '@/assets/img/mediapipe.svg'
import nextdotjsIcon from '@/assets/img/nextdotjs.svg'
import nodeIcon from '@/assets/img/nodejs.svg'
import pythonIcon from '@/assets/img/python.svg'
import reactIcon from '@/assets/img/react.svg'
import typescriptIcon from '@/assets/img/typescript.svg'
import vueIcon from '@/assets/img/vuejs.svg'
import phpIcon from '@/assets/img/php.svg'
import netIcon from '@/assets/img/dotnet.svg'

import exampleIcon from '@/assets/img/example-icon.svg'

defineProps({
    smallTitle: {
        type: String,
        default: 'button'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    btn: {
        type: Boolean,
        default: false
    },
    showNextSections: {
        type: Boolean,
        default: false
    }
})

const technologyStack = [
    {
       itemsOne: [
            {
                icon: chatgptIcon,
                label: 'ChatGPT'
            },
            {
                icon: dialogflowIcon,
                label: 'Dialogflow'
            },
            {
                icon: mediapipeIcon,
                label: 'MediaPipe'
            },
       ],
       itemsTwo: [
            {
                icon: typescriptIcon,
                label: 'Typescript'
            },
            {
                icon: nodeIcon,
                label: 'Node.js'
            },
            {
                icon: phpIcon,
                label: 'PHP'
            },
             {
                icon: graphqlIcon,
                label: 'GraphQL'
            },
             {
                icon: laravelIcon,
                label: 'Laravel'
            },
             {
                icon: javascriptIcon,
                label: 'JavaScript'
            },
             {
                icon: pythonIcon,
                label: 'Python'
            },
             {
                icon: csharpIcon,
                label: 'C#'
            },
             {
                icon: netIcon,
                label: '.NET'
            },
             {
                icon: mapnikIcon,
                label: 'Mapnik'
            },
             {
                icon: livekitIcon,
                label: 'LiveKit'
            },
       ],
       itemsThree: [
         {
                icon: reactIcon,
                label: 'React'
            },
             {
                icon: nextdotjsIcon,
                label: 'Next.JS'
            },
             {
                icon: vueIcon,
                label: 'Vue.js'
            },
             {
                icon: awsamplifyIcon,
                label: 'Amplify AWS'
            },
             {
                icon: angularIcon,
                label: 'Angular JS'
            },
             {
                icon: bootstrapIcon,
                label: 'Bootstrap Development'
            },
       ]
    }
]
</script>

<style lang="scss" scoped>

.hero-section {

    .hero-section-small {
        width: 800px;
    }

    .content {
        width: 540px;
        h5 {
            font-size: 1.75rem;
            font-weight: 400;
            color: $black-color;
            line-height: 35.28px;
        }

        h2 {
            font-size: 3.438rem;
            font-weight: 500;
            color: $black-color;
            line-height: 69.3px;
            padding-bottom: 10px;
        }

        p {
            font-size: 1.125rem;
            font-weight: 400;
            color: $black-color;
            line-height: 22.68px;
        }
    }

    .profile {
        width: 205px;
        text-align: center;
        h6 {
            font-size: 1.375rem;
            font-display: 500;
            line-height: 27.72px;
        }

        h3 {
            font-size: 2.75rem;
            font-weight: 500;
            line-height: 55.44px;
        }

        .profile-picture {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            overflow: hidden;
        }
    }
}

.technology-section {
    h3 {
        font-size: 2.75rem;
        font-weight: 500;
        line-height: 55.44px;
    }
}

.technology-boxes {
    .technology-box {
       padding: 24px 16px 20px 16px;
       background-color: $grey-color;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       gap: 22px;
        align-self: start;

    h6 {
        font-weight: 500;
        font-size: 1.375rem;
        line-height: 27.72px;
        text-align: center;
    }

    }

     .technology-box .icon {
        width: 54px;
        height: 54px;
     }

     .technology-box .icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
     }
}

.technology-stack {
    h2 {
        font-size: 2.75rem;
        font-weight: 500;
        line-height: 55.44px;
    }
}

.technology-stack-item {
    .label {
        width: 200px;

        h6 {
            font-size: 1.375rem;
            font-weight: 500;
            line-height: 27.72px;
        }
    }

    .technology-stack-item-icons-container {
        width: 68%;
    }

    .technology-stack-item-icons-item {

        span {
            font-family: 'Lato', sans-serif;
            font-size: 1.125rem;
            color: #7E7E7E;
        }
        .icon {
            width: 24px;
            height: 24px;

            img {
                width: 100%;
            }
        }
    }
}

</style>