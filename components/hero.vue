<template>
  <div class="hero-section container mx-auto pt-[80px] pb-[140px] flex justify-center">
    <div class="hero-section-small">
        <div class="flex gap-14">
            <div class="content">
                <h5>Solution</h5>
                <h1>Software development</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus deserunt vero est, voluptate exercitationem ipsam 
                    sapiente totam magnam dicta cumque fugiat iusto ex accusantium illum fugit dolorem voluptates? Nostrum, repudiandae.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus deserunt vero est, voluptate exercitationem ipsam 
                    sapiente totam magnam dicta cumque fugiat iusto ex accusantium illum fugit dolorem voluptates? Nostrum, repudiandae.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus deserunt vero est, voluptate exercitationem ipsam 
                    sapiente totam magnam dicta cumque fugiat iusto ex accusantium illum fugit dolorem voluptates? Nostrum, repudiandae.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus deserunt vero est, voluptate exercitationem ipsam 
                    sapiente totam magnam dicta cumque fugiat iusto ex accusantium illum fugit dolorem voluptates? Nostrum, repudiandae.
                </p>
            </div>
            <div class="profile flex flex-col items-center gap-8">
                <h6>
                    Garant
                </h6>
                <div class="profile-picture">
                    <picture>
                        <source srcset="@/assets/img/profile-picture.webp" type="image/webp">
                        <img src="@/assets/img/profile-picture.jpg" alt="Profile picture" type="image/jpg">
                    </picture>
                </div>

                <h3>
                    John Doe
                </h3>
                <h6>
                    Senior software engineer
                </h6>
                <UiBtn text="Get in touch" type="primary" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
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

        h1 {
            font-size: 4.375rem;
            font-weight: 700;
            color: $black-color;
            line-height: 83.21px;
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
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

</style>