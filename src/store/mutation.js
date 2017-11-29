const NEXT_ITEM = "NEXT_ITEM";
const PREV_ITEM = "PREV_ITEM";
const USE_TIME = "USE_TIME";

export default {
    [NEXT_ITEM] (state) {
        state.currendIndex += 1;
    },
    [PREV_ITEM] (state) {
        state.currendIndex -= 1;
    },
    [USE_TIME] (state, useTime) {
        state.useTime = useTime;
    }
}