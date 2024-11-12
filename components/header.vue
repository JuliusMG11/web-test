<template>
<div class="header container mx-auto">
    <div class="header-content flex justify-between items-center">
        <div class="logo">
            <img src="@/assets/img/logo.svg" alt="logo">
        </div>
        <div class="header-content__navigation">
            <nav>
                <ul class="flex gap-6 items-center">
                    <li>
                        <Nuxtlink to="#">Home</Nuxtlink>
                    </li>
                    <li>
                        <Nuxtlink to="#">Industry</Nuxtlink>
                    </li>
                    <li>
                        <Nuxtlink to="#">About us</Nuxtlink>
                    </li>
                    <li>
                        <Nuxtlink to="#">Contact</Nuxtlink>
                    </li>
                    <li>
                        <Nuxtlink to="#">Careers</Nuxtlink>
                    </li>
                    <li>
                        <UiBtn text="Get in touch" type="primary" />
                    </li>
                </ul>
            </nav>
        </div>
    </div>

</div>
  
</template>

<script script lang="ts">

</script>

<style lang="scss" scoped>

.header {
    height: 160px;
    display: flex;
    align-items: center;

    .header-content {
        width: 100%;

        .logo {
            width: 176px;
            height: 40px;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        a {
            color: $black-color;
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 1.125rem;
        }
    
    }
}
</style>