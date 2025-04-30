const questions = [
    {
        question: "接到自称是公安局的电话，说你涉嫌洗钱犯罪，要求你转账到安全账户，你应该？",
        options: [
            "A. 立即转账",
            "B. 挂断电话并报警",
            "C. 提供银行账户信息",
            "D. 按照对方指示操作"
        ],
        answer: "B",
        explanation: "公安机关不会通过电话要求转账，这是典型的冒充公检法诈骗。"
    },
    {
        question: "网上购物后，接到自称客服的电话，说要退款并要求你提供验证码，你应该？",
        options: [
            "A. 提供验证码",
            "B. 挂断电话，通过官方渠道联系客服",
            "C. 按照对方指示操作",
            "D. 告知对方银行卡信息"
        ],
        answer: "B",
        explanation: "正规客服不会索要验证码，退款应在原购物平台操作。"
    },
    {
        question: "收到中奖短信，要求你先支付手续费才能领取奖金，你应该？",
        options: [
            "A. 立即支付手续费领奖",
            "B. 忽略并删除短信",
            "C. 点击短信中的链接查看详情",
            "D. 联系短信中的电话咨询"
        ],
        answer: "B",
        explanation: "这是典型的中奖诈骗，正规抽奖活动不会要求支付手续费。"
    },
    {
        question: "网友向你推荐高回报投资平台，承诺稳赚不赔，你应该？",
        options: [
            "A. 立即注册投资",
            "B. 先小额试水",
            "C. 拒绝并举报该网友",
            "D. 推荐给朋友一起投资"
        ],
        answer: "C",
        explanation: "高回报承诺往往是投资诈骗，应拒绝参与并举报可疑信息。"
    },
    {
        question: "在公共场所连接免费WiFi时，以下哪种做法最安全？",
        options: [
            "A. 直接连接使用",
            "B. 避免进行支付等敏感操作",
            "C. 向工作人员确认WiFi真实性后再使用",
            "D. 使用VPN保护数据安全"
        ],
        answer: "C",
        explanation: "公共场所WiFi可能不安全，应确认真实性后再使用，避免进行敏感操作。"
    },
	{
        question: "收到自称是银行发来的短信，要求点击链接更新个人信息，你应该？",
        options: [
            "A. 立即点击链接更新",
            "B. 拨打银行官方电话核实",
            "C. 直接删除短信",
            "D. 转发给朋友看看"
        ],
        answer: "B",
        explanation: "银行不会通过短信链接要求更新信息，应通过官方渠道核实。"
    },
    {
        question: "陌生人加你微信后发来二维码让你帮忙扫码，你应该？",
        options: [
            "A. 热心帮忙扫码",
            "B. 拒绝并拉黑对方",
            "C. 先问问扫码做什么",
            "D. 扫码但不开链接"
        ],
        answer: "B",
        explanation: "陌生二维码可能包含恶意链接，切勿随意扫描。"
    },
    {
        question: "接到自称是快递公司的电话，说包裹丢失要赔偿，你应该？",
        options: [
            "A. 按对方要求操作",
            "B. 挂断后联系购物平台",
            "C. 提供支付宝账号",
            "D. 点击对方发来的链接"
        ],
        answer: "B",
        explanation: "快递问题应通过官方渠道处理，切勿轻信陌生电话。"
    },
    {
        question: "网友说可以帮你修改考试成绩，但要先付定金，你应该？",
        options: [
            "A. 立即转账",
            "B. 向学校举报",
            "C. 讨价还价",
            "D. 先付一半"
        ],
        answer: "B",
        explanation: "修改成绩是常见诈骗手段，切勿相信。"
    },
    {
        question: "看到网络兼职广告称'日赚千元，无需经验'，你应该？",
        options: [
            "A. 立即报名",
            "B. 分享给朋友",
            "C. 要求先试做",
            "D. 不予理会"
        ],
        answer: "D",
        explanation: "高回报兼职多是诈骗陷阱，特别是要求垫资的。"
    },
    {
        question: "接到'猜猜我是谁'的电话，对方自称是老朋友，你应该？",
        options: [
            "A. 猜对方身份",
            "B. 直接挂断",
            "C. 反问对方姓名",
            "D. 约见面"
        ],
        answer: "C",
        explanation: "这是典型的冒充熟人诈骗，应核实对方身份。"
    },
    {
        question: "网友推荐'稳赚不赔'的虚拟货币投资，你应该？",
        options: [
            "A. 大量投资",
            "B. 小额试水",
            "C. 推荐给家人",
            "D. 拒绝参与"
        ],
        answer: "D",
        explanation: "虚拟货币投资风险高，'稳赚'承诺多是骗局。"
    },
    {
        question: "收到'子女被绑架'的勒索电话，你应该？",
        options: [
            "A. 立即转账",
            "B. 联系子女核实",
            "C. 报警处理",
            "D. 与绑匪周旋"
        ],
        answer: "C",
        explanation: "应先联系家人确认，并立即报警。"
    },
    {
        question: "看到'免费领手机'的活动需要填写个人信息，你应该？",
        options: [
            "A. 立即填写",
            "B. 分享活动",
            "C. 忽略不理会",
            "D. 先看看评论"
        ],
        answer: "C",
        explanation: "此类活动多是为了收集个人信息实施诈骗。"
    },
    {
        question: "网友要求你帮忙'刷单赚佣金'，你应该？",
        options: [
            "A. 积极参与",
            "B. 拉朋友一起",
            "C. 要求先返现",
            "D. 拒绝并举报"
        ],
        answer: "D",
        explanation: "刷单是违法行为，且多是诈骗陷阱。"
    },
    {
        question: "接到'社保卡异常'的电话要求转账，你应该？",
        options: [
            "A. 按指示操作",
            "B. 挂断后拨打12333核实",
            "C. 提供银行卡号",
            "D. 转账到安全账户"
        ],
        answer: "B",
        explanation: "社保问题应通过官方渠道查询。"
    },
    {
        question: "看到'低价代购名牌'的广告，你应该？",
        options: [
            "A. 立即下单",
            "B. 要求货到付款",
            "C. 通过正规渠道购买",
            "D. 先付定金"
        ],
        answer: "C",
        explanation: "低价代购多是假货或诈骗，应选择正规渠道。"
    },
    {
        question: "收到'ETC失效'的短信含链接，你应该？",
        options: [
            "A. 立即点击更新",
            "B. 通过官方APP查询",
            "C. 转发给家人",
            "D. 拨打短信内电话"
        ],
        answer: "B",
        explanation: "ETC业务应通过官方渠道办理。"
    },
    {
        question: "网友发来'爱心捐款'链接，你应该？",
        options: [
            "A. 立即捐款",
            "B. 通过正规平台捐赠",
            "C. 帮忙转发",
            "D. 要求视频核实"
        ],
        answer: "B",
        explanation: "网络捐款应通过正规慈善机构平台。"
    },
    {
        question: "接到'领导'微信要求转账应急，你应该？",
        options: [
            "A. 立即转账",
            "B. 电话核实身份",
            "C. 先转小额",
            "D. 要求见面"
        ],
        answer: "B",
        explanation: "涉及转账必须当面或电话核实身份。"
    }
];

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