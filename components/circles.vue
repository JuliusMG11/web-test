<template>
   <div class="circles-section container mx-auto py-[120px] flex justify-center">
    <div class="circles-section-small">
        <div class="circles-section-items relative flex justify-center">
            <div class="circles-section-items__item relative">
                <p>
                    Delivery Excellence
                </p>
                <div class="circles-section-items__item-arrow absolute">
                    <img src="@/assets/img/new-arrow.svg">
                </div>
            </div>
        </div>
        <div class="circles-section-items flex relative justify-between">
            <div class="circles-section-items__item relative">
                <p>
                    Maintenance
                </p>
                 <div class="circles-section-items__item-arrow absolute">
                    <img src="@/assets/img/new-arrow.svg">
                </div>
            </div>
            <div class="circles-section-items__item relative">
                <p>
                    Analysis <br/>& Design
                </p>
                 <div class="circles-section-items__item-arrow absolute">
                    <img src="@/assets/img/new-arrow.svg">
                </div>
            </div>
        </div>
        <div class="circles-section-items flex justify-center gap-28 pt-20">
            <div class="circles-section-items__item relative">
                <p>
                    Testing
                </p>
                 <div class="circles-section-items__item-arrow absolute">
                    <img src="@/assets/img/new-arrow.svg">
                </div>
            </div>
            <div class="circles-section-items__item relative">
                <p>
                    Implementation
                </p>
                 <div class="circles-section-items__item-arrow absolute">
                    <img src="@/assets/img/new-arrow.svg">
                </div>
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
.circles-section {
    .circles-section-small {
        width: 800px;
    }

    .circles-section-items {
        .circles-section-items__item-arrow img {
            width: 72px;
        }

        .circles-section-items__item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: $grey-color;
            padding: 32px;
            p {
                font-size: 1.25rem;
                font-weight: 500;
                line-height: 25.2px;
                text-align: center;
            }
        }

        &:first-child {
            .circles-section-items__item-arrow {
                   transform: rotate(-5deg) translate(124px, 100px);
            }
        }

        &:nth-child(2) {

           .circles-section-items__item:first-child {
            .circles-section-items__item-arrow {
                transform: rotate(-68deg) translate(132px, 94px);
            }
           }

           .circles-section-items__item:last-child {
            .circles-section-items__item-arrow {
                transform: rotate(87deg) translate(122px, 68px);
            }
           }

        }

        &:last-child {

           .circles-section-items__item:first-child {
            .circles-section-items__item-arrow {
                transform: rotate(-150deg) translate(118px, 68px);
            }
           }

           .circles-section-items__item:last-child {
            .circles-section-items__item-arrow {
                transform: rotate(150deg) translate(114px, 71px);
            }
           }

        }
    }
}

</style>