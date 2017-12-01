<template>
  <div class="exam-result">
      <div class="scores-container">
          <div class="">
            <header class="scores">{{getScore}}分</header>
            <label class="result-tips">{{resultTips}}</label>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    data () {
        return {
            //答错的题
            errorExam: [],
            //答对的题
            sureExam: [],
            //总分
            totalScore: 0,
            //得分
            getScore: 0,
            resultTips: "",
            examList: []
        }
    },
    computed:mapState([
        'saveAnswer',
        'useTime',
        'examId'
    ]),
    mounted () {
        const vm = this;
        vm.examList = vm.$store.state.examList[this.examId - 1] || [];
        vm.getSureAnswer();
    },
    methods: {
        getSureAnswer() {
            var vm = this;
            // if(vm.examList.length !== vm.saveAnswer.length){
            //     vm.$Message.error({
            //         content: '系统错误，请稍后重试',
            //         duration: 3
            //     });
            //     return;
            // }
            vm.examList.forEach(function(item, index){
                vm.totalScore += parseInt(item.score);
                if((item.answer + 1) == vm.saveAnswer[index]){
                    vm.sureExam.push(item);
                    vm.getScore += parseInt(item.score);
                }else{
                    vm.errorExam.push(item);
                }
            })
            vm.setResultTips();
            console.log(this.useTime)
            console.log("答对题:" + vm.sureExam.length);
        },
        setResultTips() {
            const scores = [100 ,90, 70, 60, 40, 20],
                  tips = [
                      '哇，你太优秀了，厉害了！！！',
                      '智商只差一步就爆表了，继续加油！',
                      '表现很好，good！',
                      '嗯，不错，还有很大的进步空间！',
                      '还需要继续加油哦！！！',
                      'What are you弄啥嘞！'
                  ];
            if(this.getScore <= scores[5]) {
                this.resultTips = tips[5];
                return;
            }
            if(this.getScore <= scores[4]) {
                this.resultTips = tips[4];
                return;
            }
            if(this.getScore <= scores[3]) {
                this.resultTips = tips[3];
                return;
            }
            if(this.getScore <= scores[2]) {
                this.resultTips = tips[2];
                return;
            }
            if(this.getScore <= scores[1]) {
                this.resultTips = tips[1];
                return;
            }
            if(this.getScore <= scores[0]) {
                this.resultTips = tips[0];
                return;
            }
        }
    }
}
</script>

<style scoped>
    .exam-result{
        height: 100%;
        width: 100%;
        background: url(../assets/4.jpg) no-repeat;
        background-size: 100%;
    }
    .scores-container{
        background: url(../assets/5.png) no-repeat;
        background-size: 100%;
        width: 14rem;
        height: 14rem;
        margin: 0 auto;
        position: relative;
    }
    .scores-container .scores{
        position: absolute;
        width: 100%;
        text-indent: 1.3rem;
        top: 6.5rem;
        font-size: 1.4rem;
        font-weight: bolder;
        color: #412318;
        text-align: center;
    }
    .result-tips{
        position: absolute;
        width: 90%;
        margin: 0 auto;
        display: block;
        top: 9rem;
        color: #3e2415;
        display: block;
        font-size: 1.1rem;
        left: 1rem;
        text-align: center;
    }
</style>
