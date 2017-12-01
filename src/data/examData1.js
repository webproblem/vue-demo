/**
 * @param {Number} examTime 考试时长
 * @param {String} title 题目内容
 * @param {Array} options 答案选项
 * @param {Number} answer 正确答案索引，从0开始
 * @param {Number} score 题目对应的分数
 * @param {String} examId 题目唯一ID
*/

export const examTime = 30;

export const examList = [
    {
        title: "《春晓》这首诗是出自哪位诗人？",
        options: ["李白", "杜甫", "王维", "苏轼"],
        answer: 1,
        score: 5,
        examId: "0"
    },
    {
        title: "“横看成岭侧成峰，远近高低各不同”，这两句诗描写的名胜景点是？",
        options: ["华山", "泰山", "庐山", "三清山"],
        answer: 2,
        score: 10,
        examId: "1"
    },
    {
        title: "月落乌啼霜满天，（ ）",
        options: [
            "江枫渔火对愁眠",
            "疑是银河落九天",
            "唯见长江天际流",
            "夜半钟声到客船"
        ],
        answer: 0,
        score: 10,
        examId: "2"
    },
    {
        title: "五年一班在上学期期末检测时，有2名学生不及格，及格率是95﹪，五年一班共有学生（ ）名",
        options: ["35", "50", "40", "60"],
        answer: 2,
        score: 10,
        examId: "3"
    },
    {
        title: "假设a=2b，b+c=17，c=7，那么a的值是",
        options: ["15", "18", "30", "20"],
        answer: 3,
        score: 10,
        examId: "4"
    },
    {
        title: "甲、乙两车早晨8点分别从两城市出发，相向而行，到下午1点在途中相遇。已知甲车平均每小时行100千米，乙车平均每小时行98千米，那么这两个城市之间的路程是多少千米？",
        options: ["1000", "999", "990", "900"],
        answer: 2,
        score: 15,
        examId: "5"
    },
    {
        title: `---Sam is 160cm tall. Ted is 10cm shorter than him.
                How tall is Ted`,
        options: ["150cm", "160cm", "170cm", "180cm"],
        answer: 0,
        score: 10,
        examId: "6"
    },
    {
        title: `----_______did you go on your holiday?
                ----Shanghai.`,
        options: ["What", "Where", "How", "where"],
        answer: 1,
        score: 10,
        examId: "7"
    },
    {
        title: `-- ______ is the coat?
                --Thirty-five yuan, please.`,
        options: ["How", "How much", "How old", "Where"],
        answer: 1,
        score: 10,
        examId: "8"
    },
    {
        title: "体育锻炼时消耗的营养物质是靠（  ）来补充。",
        options: ["水", "糖", "脂肪", "肉食"],
        answer: 1,
        score: 10,
        examId: "9"
    },

];
