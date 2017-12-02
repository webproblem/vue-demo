<template>
  <div class="exam">
      <div class="header">
          <p class="title">考试试题</p>
          <p class="describe">
              <span>考试日期: {{currentDate}}</span>
              <span>时长: {{time}}分钟</span>
          </p>
      </div>
      <section v-for="(item, index) in examList" v-show="index == currendIndex">
          <label>{{ index + 1 }}. <span>{{item.title}} ({{item.score}}分)</span></label>
          <div class="item-options">
              <RadioGroup v-model="selectedValue" @on-change="changeCurrentAnswer">
                  <Radio v-for="(option, listIndex) in item.options" :label="listIndex+1" :key="listIndex"><span v-html="option"></span></Radio>
              </RadioGroup>
          </div>
      </section>
      <div class="time-count-wrap">距离考试结束还有：{{restTime}}</div>
      <div class="buttons-group">
          <Button type="error" size="large" @click.native="prevItem" :disabled="currendIndex<1 && currendIndex != examList.length-1">上一题</Button>
          <Button type="error" size="large" @click.native="nextItem" v-if="currendIndex != examList.length-1">下一题</Button>
          <Button type="error" size="large" @click.native="handleSubmit" v-if="currendIndex == examList.length-1">提交试卷</Button>
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {getNumberPrefix, getCurrentDate} from '../utils/common'

export default {
    data () {
        return {
            currentDate: getCurrentDate(),
            //选中的答案
            selectedValue: "",
            //初始化时间戳
            currentTime: new Date().getTime(),
            restTime: "",
            timer: ""
        }
    },
    watch: {
      $route (to) {
      }
    },
    mounted () {
        this.countTime();
        // console.log(this.examList)
    },
    computed: {
        examList() {
            const vm = this;
            return vm.$store.state.examList[vm.$route.query.id - 1];
        },
        time() {
            const vm = this;
            return vm.$store.state.time[vm.$route.query.id - 1];
        },
        ...mapState([
            'currendIndex',
            'saveAnswer'
        ])
    },
    methods: {
        ...mapMutations([
            'NEXT_ITEM',
            'PREV_ITEM',
            'USE_TIME',
            'EXAM_ID'
        ]),
        //下一题
        nextItem() {
            if(!this.selectedValue){
                this.$Message.warning('请先选择答案！');
                return;
            }
            this.selectedValue = "";
            this.NEXT_ITEM();
            this.getCurrentAnswer();
        },
        //上一题
        prevItem() {
            this.PREV_ITEM();
            this.getCurrentAnswer();
        },
        //提交答案
        handleSubmit() {
            this.EXAM_ID(this.$route.query.id);
            this.USE_TIME(new Date().getTime() - this.currentTime);
            clearTimeout(this.timer);
            this.$router.push({name: 'Result'});
        },
        //更改当前题目的答案
        changeCurrentAnswer() {
            this.saveAnswer[this.currendIndex] = this.selectedValue;
        },
        //获取当前题目填写的答案
        getCurrentAnswer() {
            const currentAnswer = this.saveAnswer[this.currendIndex];
            if(currentAnswer){
                this.selectedValue = currentAnswer;
            }else{
                this.saveAnswer[this.currendIndex] = this.selectedValue;
            }
            console.log(this.saveAnswer);
        },
        //倒计时
        countTime() {
            const vm = this,
                  endTime = vm.time * 60 * 1000 + vm.currentTime,
                  currentTime = new Date().getTime(),
                  restTime = endTime - currentTime,
                  hours = getNumberPrefix(parseInt(restTime / (1000 * 60 * 60) % 24, 10)),
                  minutes = getNumberPrefix(parseInt(restTime / (1000 * 60) % 60, 10)),
                  seconds = getNumberPrefix(parseInt(restTime / 1000 % 60, 10));
            vm.restTime = `${hours}:${minutes}:${seconds}`;
            vm.timer = setTimeout(function(){
                if(restTime > 0){
                    vm.countTime();
                }else if(restTime <= 0){
                    clearTimeout(vm.timer);
                    vm.$Message.warning("交卷时间已到，系统将帮您自动交卷");
                    setTimeout(() => {
                      vm.handleSubmit();
                    }, 2000)
                }
            }, 1000);
        }
    }
}
</script>

<style>
.exam{
    width: 100%;
    height: 100%;
    font-size: 1rem;
}
.exam .header,
.exam section,
.time-count-wrap
{
    padding: 15px;
    text-align: left;
}
.exam .header
{
    border-bottom: 9px solid #ccc;
}
.header .describe,
.time-count-wrap
{
    font-size: 0.8rem;
    color: rgba(135, 134, 136, 0.84);
}
.header .describe span:nth-child(2){
    float: right;
}
.exam section{
    border-left: 5px solid red;
    background: url(../assets/3.jpg) 100% 100%;;
}
section .ivu-radio-group label{
    display: block;
    padding: 7px 0px;
    white-space: normal;
}
.buttons-group{
    padding: 30px 0px;
}
.buttons-group button{
    padding-left: 25px;
    padding-right: 25px;
    margin-left: 5px;
}
.ivu-radio-wrapper{
    font-size: 0.9rem;
}
span.ivu-radio+*{
  position: relative;
  left: 20px;
}
.item-options .ivu-radio{
  position: absolute!important;
}
</style>
