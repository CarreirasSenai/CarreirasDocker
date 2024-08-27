<template>
    <div>
        <!-- Calendário -->
        <div class="calendar-days">
            <div v-for="(day, index) in days" :key="index"
                :class="['day', { 'has-events': day.events.length > 0, 'out-of-month': day.isOutOfMonth }]"
                :style="dayStyle" @click="triggerShowEvents(day.events)">
                {{ day.date }}
            </div>
        </div>

        <!-- Seção para exibir eventos -->
        <div id="events-section" class="events-section">
            <div v-if="selectedEvents.length">
                <ul>
                    <li v-for="(event, index) in selectedEvents" :key="index" 
                        :style="getEventStyle(event)" @click="selectEvent(event)">
                        {{ event.title }}
                    </li>
                </ul>
                <div v-if="selectedEventDescription" class="event-description">
                    {{ selectedEventDescription }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        days: Array,
        dayStyle: Object,
    },
    data() {
        return {
            selectedEvents: [],
            selectedEventDescription: null
        };
    },
    methods: {
        triggerShowEvents(events) {
            if (events.length > 0) {
                this.selectedEvents = events;
                this.selectedEventDescription = null; // Clear the description when switching events
                this.$nextTick(() => {
                    const eventsSection = document.getElementById('events-section');
                    if (eventsSection) {
                        eventsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
        },
        selectEvent(event) {
            this.selectedEventDescription = event.description || 'Descrição não disponível';
        },
        getEventStyle(event) {
            if (event.type === "event") {
                return {
                    backgroundColor: 'rgba(104, 50, 210, 1)',
                    color: 'white',
                    fontWeight: '500',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '2px',
                    fontSize: '22px',
                    borderRadius: '3px',
                    margin: '4px',
                };
            } else {
                return {
                    backgroundColor: 'rgb(58, 28, 118)',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '2px',
                    fontSize: '22px',
                    borderRadius: '3px',
                    margin: '4px',
                };
            }
        }
    }
};
</script>

<style scoped>
.event-description {
    margin-top: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 4px;
}
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

.day.has-events {
    background-color: rgb(141, 50, 210);
    color: white;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: center;
}

.day {
    border: solid;
    padding: 5px !important;
    border-color: #cbcbcb !important;
    border-width: 1px;
    height: 50px !important;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

.events-section {
    margin-top: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.events-section h2 {
    margin-bottom: 10px;
}

.events-section ul {
    list-style-type: none;
    padding: 0;
}

.events-section li {
    margin-bottom: 5px;
}
</style>
