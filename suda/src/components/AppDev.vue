<template>
    <div class="lt-app-dev">
        <app-dev-temp :leftContent="content.side || []"></app-dev-temp>
    </div>    
</template>
<script>
import AppDevTemp from './AppDevTemp'
import data from '../data/data.js'
export default {
    data(){
        return{
            content: data.themeDev
        }
    },
    components:{AppDevTemp}
}
</script>
<style lang="scss" scoped>

</style>
