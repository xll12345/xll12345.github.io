const questions = [
    {
        question: "五一假期前，收到'学校教务处'短信称可申请'假期补助金'，要求点击链接填写信息，你应该？",
        options: [
            "A. 立即点击链接申请",
            "B. 联系辅导员核实",
            "C. 转发给同学一起申请",
            "D. 按要求输入银行卡号"
        ],
        answer: "B",
        explanation: "学校补助金需通过正规流程申请，不会通过短信链接索取信息。"
    },
    {
        question: "网友推荐'五一特惠'旅游套餐，要求先付定金锁定名额，你应该？",
        options: [
            "A. 立即转账预定",
            "B. 查看旅行社资质后再决定",
            "C. 邀请朋友拼单",
            "D. 提供身份证照片"
        ],
        answer: "B",
        explanation: "特价旅游可能是诈骗陷阱，应核实旅行社资质后再付款。"
    },
    {
        question: "五一兼职群看到'日结500元'的景区工作招聘，你应该？",
        options: [
            "A. 立即报名参加",
            "B. 要求先试工再付费",
            "C. 核实招聘单位信息",
            "D. 支付押金占名额"
        ],
        answer: "C",
        explanation: "高薪兼职需谨慎，正规工作不会要求提前付费。"
    },
    {
        question: "收到'航班取消'短信要求点击链接改签，你应该？",
        options: [
            "A. 直接点击链接操作",
            "B. 拨打航空公司官方电话核实",
            "C. 转发给同行朋友",
            "D. 提供银行卡信息补偿"
        ],
        answer: "B",
        explanation: "航班变动应通过官方渠道查询，短信链接可能是钓鱼网站。"
    },
    {
        question: "网友在五一期间推荐'稳赚不赔'的投资项目，你应该？",
        options: [
            "A. 借钱投资",
            "B. 小额试水",
            "C. 拒绝并举报",
            "D. 推荐给家人"
        ],
        answer: "C",
        explanation: "节假日期间投资诈骗高发，'稳赚'承诺都是骗局。"
    },
    {
        question: "预订民宿时，房东要求微信直接转账定金，你应该？",
        options: [
            "A. 立即转账",
            "B. 通过正规平台支付",
            "C. 先付一半定金",
            "D. 发送身份证照片"
        ],
        answer: "B",
        explanation: "住宿预订应通过正规平台交易，保障资金安全。"
    },
    {
        question: "同学发来'五一拼车'信息，要求预付车费，你应该？",
        options: [
            "A. 直接转账",
            "B. 核实同学身份真实性",
            "C. 要求上车付款",
            "D. 帮忙转发信息"
        ],
        answer: "B",
        explanation: "社交账号可能被盗用，需电话确认是否为本人。"
    },
    {
        question: "看到'五一特惠'代购名牌广告，价格仅为专柜3折，你应该？",
        options: [
            "A. 立即下单",
            "B. 要求货到付款",
            "C. 通过官方渠道购买",
            "D. 支付定金预留"
        ],
        answer: "C",
        explanation: "低价奢侈品多为假货，应选择正规购买渠道。"
    },
    {
        question: "收到'快递丢失双倍赔偿'电话，要求提供支付宝密码，你应该？",
        options: [
            "A. 配合操作",
            "B. 挂断后联系购物平台",
            "C. 告知父母代处理",
            "D. 点击短信链接"
        ],
        answer: "B",
        explanation: "快递赔偿应原路返回，不会索要账户密码。"
    },
    {
        question: "网友邀请五一期间参与'刷单赚旅费'活动，你应该？",
        options: [
            "A. 积极参与",
            "B. 拉室友一起参加",
            "C. 拒绝并举报",
            "D. 先试一单"
        ],
        answer: "C",
        explanation: "刷单是违法行为，且多为诈骗陷阱。"
    },
    {
        question: "预订景区门票时，陌生网站要求输入短信验证码，你应该？",
        options: [
            "A. 如实填写",
            "B. 关闭网站",
            "C. 先支付一半",
            "D. 转发验证码给朋友"
        ],
        answer: "B",
        explanation: "正规购票平台不会索要短信验证码。"
    },
    {
        question: "五一期间接到'公检法'电话称涉嫌犯罪，要求转账保证金，你应该？",
        options: [
            "A. 立即筹钱",
            "B. 联系学校保卫处",
            "C. 告知父母处理",
            "D. 按指示操作"
        ],
        answer: "B",
        explanation: "司法机关不会电话要求转账，这是典型冒充公检法诈骗。"
    },
    {
        question: "同学群出现'五一红包雨'链接，要求填写学号密码，你应该？",
        options: [
            "A. 立即参加",
            "B. 提醒群友勿点击",
            "C. 先修改密码再点",
            "D. 转发到其他群"
        ],
        answer: "B",
        explanation: "陌生链接可能盗取账号信息，应提醒他人防范。"
    },
    {
        question: "网友推荐'五一校园贷免息'活动，你应该？",
        options: [
            "A. 立即申请",
            "B. 咨询辅导员",
            "C. 比较其他平台",
            "D. 推荐给同学"
        ],
        answer: "B",
        explanation: "校园贷陷阱多，学校提供正规资助渠道。"
    },
    {
        question: "收到'五一实习内推'邮件，要求支付押金，你应该？",
        options: [
            "A. 支付押金占名额",
            "B. 核实公司真实性",
            "C. 先付一半定金",
            "D. 转发给求职同学"
        ],
        answer: "B",
        explanation: "正规实习不会收取费用，应通过官方渠道申请。"
    },
    {
        question: "旅游APP客服来电要求'验证身份'并索取验证码，你应该？",
        options: [
            "A. 配合操作",
            "B. 挂断后通过APP内联系客服",
            "C. 告知部分信息",
            "D. 要求视频验证"
        ],
        answer: "B",
        explanation: "客服不会主动索要验证码，应通过官方渠道核实。"
    },
    {
        question: "五一期间看到'免费摄影套餐'活动，要求填写详细住址，你应该？",
        options: [
            "A. 如实填写",
            "B. 参加线下推广会",
            "C. 忽略此类活动",
            "D. 只写学校地址"
        ],
        answer: "C",
        explanation: "免费活动常为获取隐私信息，应保持警惕。"
    },
    {
        question: "网友发来'五一返校拼车'二维码，你应该？",
        options: [
            "A. 立即扫码加入",
            "B. 核实车主身份后再决定",
            "C. 转发到班级群",
            "D. 先支付订金"
        ],
        answer: "B",
        explanation: "陌生二维码可能含恶意链接，应核实车主真实信息。"
    },
    {
        question: "接到'学校财务处'电话称要退还学费，要求提供银行卡信息，你应该？",
        options: [
            "A. 立即提供",
            "B. 挂断后联系学校核实",
            "C. 要求对方发公文",
            "D. 告知父母处理"
        ],
        answer: "B",
        explanation: "学校退费有固定流程，不会电话索要银行卡信息。"
    },
    {
        question: "五一期间在网吧使用公共电脑后，应该首先做什么？",
        options: [
            "A. 直接离开",
            "B. 清除浏览记录",
            "C. 修改所有密码",
            "D. 关机了事"
        ],
        answer: "C",
        explanation: "公共电脑可能留存信息，应立即修改登录过的账号密码。"
    }
];

// 其余代码保持不变...

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const progressElement = document.getElementById("progress");
const nextButton = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");

function showQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionElement.textContent = question.question;
        
        optionsElement.innerHTML = "";
        question.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option");
            button.addEventListener("click", selectOption);
            optionsElement.appendChild(button);
        });
        
        progressElement.textContent = `问题 ${currentQuestion + 1}/${questions.length}`;
        nextButton.style.display = "none";
    } else {
        showResult();
    }
}

function selectOption(e) {
    const selectedButton = e.target;
    const options = document.querySelectorAll(".option");
    
    options.forEach(option => {
        option.classList.remove("selected");
    });
    
    selectedButton.classList.add("selected");
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(".option.selected");
    if (!selectedOption) {
        alert("请选择一个答案！");
        return;
    }
    
    const userAnswer = selectedOption.textContent.charAt(0);
    userAnswers.push(userAnswer);
    
    if (userAnswer === questions[currentQuestion].answer) {
        score++;
    }
    
    currentQuestion++;
    showQuestion();
});

function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";
    progressElement.style.display = "none";
    
    resultElement.style.display = "block";
    resultElement.innerHTML = `
        <h2>测试完成！</h2>
        <p>你的得分: ${score}/${questions.length}</p>
    `;
    
    const accuracy = (score / questions.length) * 100;
    let message = "";
    if (accuracy >= 80) {
        message = "优秀！你对防诈骗知识掌握得很好！";
    } else if (accuracy >= 60) {
        message = "良好！请继续学习防诈骗知识。";
    } else {
        message = "需要加强！建议多了解防诈骗知识，保护自己财产安全。安装便捷，功能强大，有效预防电信诈骗。国家反诈中心app守护您的财产安全!<br>生活中遇到问题请及时联系：资阳市公安局高新技术产业园区分局，电话：0898 6558 0783";
    }
    
    resultElement.innerHTML += `<p>${message}</p>`;
    
    // 显示错题解析
    const wrongQuestions = [];
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] !== questions[i].answer) {
            wrongQuestions.push(questions[i]);
        }
    }
    
    if (wrongQuestions.length > 0) {
        resultElement.innerHTML += `<h3>错题解析：</h3>`;
        wrongQuestions.forEach((q, index) => {
            resultElement.innerHTML += `
                <div class="explanation">
                    <p><strong>问题：</strong>${q.question}</p>
                    <p><strong>你的答案：</strong>${userAnswers[currentQuestion - wrongQuestions.length + index]}</p>
                    <p><strong>正确答案：</strong>${q.answer}</p>
                    <p><strong>解析：</strong>${q.explanation}</p>
                </div>
            `;
        });
    }
    
    // 添加重新开始按钮
    const restartButton = document.createElement("button");
    restartButton.textContent = "重新开始";
    restartButton.classList.add("next-btn");
    restartButton.addEventListener("click", restartQuiz);
    resultElement.appendChild(restartButton);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    
    questionElement.style.display = "block";
    optionsElement.style.display = "flex";
    progressElement.style.display = "block";
    resultElement.style.display = "none";
    
    showQuestion();
}

// 初始化显示第一个问题
showQuestion();