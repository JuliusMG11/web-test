<template>
  <div class="customers-section container mx-auto py-[100px] flex justify-center">
    <div class="customers-section-small">
        <h2 class="pb-14">What our customers most frequently need?</h2>
        <div class="custom-section__circle flex gap-2 justify-center items-center">
            <div class="custom-section__circle-item">
                <p>
                    We have an idea do not know to turn it a reality
                </p>
            </div>
            <div class="custom-section__circle-item">
                <p>
                   Projects or Products are stucked and we do not know how to move forward.
                </p>
            </div>
            <div class="custom-section__circle-item">
                <p>
                    We need a solution but dont't know where to start...
                </p>
            </div>
        </div>

        <div class="custom-section__circle flex gap-2 justify-center items-center">
            <div class="custom-section__circle-item">
                <p>
                    Systems are getting more complex and it is not sustainabble to manage them
                </p>
            </div>
            <div class="custom-section__circle-item">
                <p>
                    Having our own IT team for the system is too expensive, we want System as a Service
                </p>
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

.customers-section {

   .customers-section-small {
    width: 800px;
        h2 {
            font-size: 3.438rem;
            font-weight: 500;
            line-height: 55.44px;
        }
   }

   .custom-section__circle {

        .custom-section__circle-item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: $grey-color;
            padding: 32px;

            p {
                font-size: 1.125rem;
                font-weight: 400;
                line-height: 22.68px;
                text-align: center;
            }
        }
   }
}

</style>