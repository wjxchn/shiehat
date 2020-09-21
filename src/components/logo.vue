<template>
    <div class="th-logo">
        <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
            <g id="XMLID_1_">
                <polygon id="XMLID_3_" :style="{ stroke: color }" class="st0" points="75.7,75.9 94.4,91.4 5.6,91.4 25.7,75.9 50.7,8.6 	"/>
                <line id="XMLID_2_" :style="{ stroke: color }" class="st1" x1="26" y1="76.5" x2="76" y2="76.5"/>
            </g>
        </svg>
    </div>
</template>
<script>
    export default {
        props: ["color"]
    };
</script>
<style scoped lang="scss">
    .st0 {
        fill: none;
        stroke: #000;
        stroke-width: 6;
        stroke-miterlimit: 10;
        transition: stroke .5s;
    }
    .st1 {
        fill: none;
        stroke: #000;
        stroke-width: 6;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        transition: stroke .5s;
    }
    .th-logo svg {
        height: 35px;
        @media (min-width: 768px) {
            height: 50px;
        }
    }
</style>