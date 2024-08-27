<template>
    <div class="calendar-days">
        <div v-for="(day, index) in days" :key="index"
            :class="['day', { 'has-events': day.events.length > 0, 'out-of-month': day.isOutOfMonth }]"
            :style="dayStyle">
            {{ day.date }}
            <div v-for="(event, eventIndex) in (showMore[index] ? day.events : day.events.slice(0, 3))"
                :key="eventIndex" :style="eventStyle(event)" @click="showModal(event.title, event.description)"
                class="event">
                {{ event.title }}
            </div>
            <v-btn v-if="day.events.length > 3" @click="toggleShowMore(index)" class="more-events">
                {{ showMore[index] ? '-Menos' : '+Mais ' }}{{ day.events.length - 3 }}
            </v-btn>
            <div v-if="showMore[index]" class="show-more-content">
                <div v-for="(event, eventIndex) in day.events.slice(3)" :key="eventIndex" :style="eventStyle(event)"
                    @click="showModal(event.title, event.description)" class="event">
                    {{ event.title }}
                </div>
                <v-btn v-if="day.events.length > 3" @click="toggleShowMore(index)" class="more-events">
                    {{ showMore[index] ? '-Menos ' : '+Mais ' }}{{ day.events.length - 3 }}
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        days: Array,
        dayStyle: Object,
        eventStyle: Function,
        showMore: Array,
        showModal: Function,
        toggleShowMore: Function
    }
};
</script>

<style scoped>
.calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1px;
}

.more-events {
    margin-top: 3px;
    color: rgb(255, 102, 67);
    font-size: 13px;
}

.day {
    border: solid;
    padding: 5px !important;
    border-color: #cbcbcb !important;
    border-width: 1px;
    height: 140px;
    display: flex;
    position: relative;
    flex-direction: column;
}

.v-btn.v-btn--density-default {
    color: rgb(255, 102, 67);
    height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.v-btn__content {
    font-size: 12px;
}

.show-more-content {
    background-color: white;
    padding: 2px 6px;
    position: absolute;
    top: 110px;
    left: 0;
    width: 100%;
    z-index: 20;
    display: flex;
    flex-direction: column;
}
</style>
